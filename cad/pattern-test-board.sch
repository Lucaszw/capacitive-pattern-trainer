<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE eagle SYSTEM "eagle.dtd">
<eagle version="9.6.2">
<drawing>
<settings>
<setting alwaysvectorfont="no"/>
<setting verticaltext="up"/>
</settings>
<grid distance="0.1" unitdist="inch" unit="inch" style="lines" multiple="1" display="no" altdistance="0.01" altunitdist="inch" altunit="inch"/>
<layers>
<layer number="1" name="Top" color="4" fill="1" visible="no" active="no"/>
<layer number="2" name="Route2" color="16" fill="1" visible="no" active="no"/>
<layer number="3" name="Route3" color="17" fill="1" visible="no" active="no"/>
<layer number="4" name="Route4" color="18" fill="1" visible="no" active="no"/>
<layer number="5" name="Route5" color="19" fill="1" visible="no" active="no"/>
<layer number="6" name="Route6" color="25" fill="1" visible="no" active="no"/>
<layer number="7" name="Route7" color="26" fill="1" visible="no" active="no"/>
<layer number="8" name="Route8" color="27" fill="1" visible="no" active="no"/>
<layer number="9" name="Route9" color="28" fill="1" visible="no" active="no"/>
<layer number="10" name="Route10" color="29" fill="1" visible="no" active="no"/>
<layer number="11" name="Route11" color="30" fill="1" visible="no" active="no"/>
<layer number="12" name="Route12" color="20" fill="1" visible="no" active="no"/>
<layer number="13" name="Route13" color="21" fill="1" visible="no" active="no"/>
<layer number="14" name="Route14" color="22" fill="1" visible="no" active="no"/>
<layer number="15" name="Route15" color="23" fill="1" visible="no" active="no"/>
<layer number="16" name="Bottom" color="1" fill="1" visible="no" active="no"/>
<layer number="17" name="Pads" color="2" fill="1" visible="no" active="no"/>
<layer number="18" name="Vias" color="2" fill="1" visible="no" active="no"/>
<layer number="19" name="Unrouted" color="6" fill="1" visible="no" active="no"/>
<layer number="20" name="Dimension" color="24" fill="1" visible="no" active="no"/>
<layer number="21" name="tPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="22" name="bPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="23" name="tOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="24" name="bOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="25" name="tNames" color="7" fill="1" visible="no" active="no"/>
<layer number="26" name="bNames" color="7" fill="1" visible="no" active="no"/>
<layer number="27" name="tValues" color="7" fill="1" visible="no" active="no"/>
<layer number="28" name="bValues" color="7" fill="1" visible="no" active="no"/>
<layer number="29" name="tStop" color="7" fill="3" visible="no" active="no"/>
<layer number="30" name="bStop" color="7" fill="6" visible="no" active="no"/>
<layer number="31" name="tCream" color="7" fill="4" visible="no" active="no"/>
<layer number="32" name="bCream" color="7" fill="5" visible="no" active="no"/>
<layer number="33" name="tFinish" color="6" fill="3" visible="no" active="no"/>
<layer number="34" name="bFinish" color="6" fill="6" visible="no" active="no"/>
<layer number="35" name="tGlue" color="7" fill="4" visible="no" active="no"/>
<layer number="36" name="bGlue" color="7" fill="5" visible="no" active="no"/>
<layer number="37" name="tTest" color="7" fill="1" visible="no" active="no"/>
<layer number="38" name="bTest" color="7" fill="1" visible="no" active="no"/>
<layer number="39" name="tKeepout" color="4" fill="11" visible="no" active="no"/>
<layer number="40" name="bKeepout" color="1" fill="11" visible="no" active="no"/>
<layer number="41" name="tRestrict" color="4" fill="10" visible="no" active="no"/>
<layer number="42" name="bRestrict" color="1" fill="10" visible="no" active="no"/>
<layer number="43" name="vRestrict" color="2" fill="10" visible="no" active="no"/>
<layer number="44" name="Drills" color="7" fill="1" visible="no" active="no"/>
<layer number="45" name="Holes" color="7" fill="1" visible="no" active="no"/>
<layer number="46" name="Milling" color="3" fill="1" visible="no" active="no"/>
<layer number="47" name="Measures" color="7" fill="1" visible="no" active="no"/>
<layer number="48" name="Document" color="7" fill="1" visible="no" active="no"/>
<layer number="49" name="Reference" color="7" fill="1" visible="no" active="no"/>
<layer number="51" name="tDocu" color="7" fill="1" visible="no" active="no"/>
<layer number="52" name="bDocu" color="7" fill="1" visible="no" active="no"/>
<layer number="88" name="SimResults" color="9" fill="1" visible="yes" active="yes"/>
<layer number="89" name="SimProbes" color="9" fill="1" visible="yes" active="yes"/>
<layer number="90" name="Modules" color="5" fill="1" visible="yes" active="yes"/>
<layer number="91" name="Nets" color="2" fill="1" visible="yes" active="yes"/>
<layer number="92" name="Busses" color="1" fill="1" visible="yes" active="yes"/>
<layer number="93" name="Pins" color="2" fill="1" visible="no" active="yes"/>
<layer number="94" name="Symbols" color="4" fill="1" visible="yes" active="yes"/>
<layer number="95" name="Names" color="7" fill="1" visible="yes" active="yes"/>
<layer number="96" name="Values" color="7" fill="1" visible="yes" active="yes"/>
<layer number="97" name="Info" color="7" fill="1" visible="yes" active="yes"/>
<layer number="98" name="Guide" color="6" fill="1" visible="yes" active="yes"/>
</layers>
<schematic xreflabel="%F%N/%S.%C%R" xrefpart="/%S.%C%R">
<libraries>
<library name="touch-point">
<packages>
<package name="TOUCHPOINT">
<pad name="P$1" x="0" y="0" drill="0.6" shape="square"/>
<polygon width="0.127" layer="1">
<vertex x="5" y="0"/>
<vertex x="5" y="-5"/>
<vertex x="-5" y="-5"/>
<vertex x="-5" y="5"/>
<vertex x="5" y="5"/>
</polygon>
<rectangle x1="-5.08" y1="-5.08" x2="5.08" y2="5.08" layer="29"/>
</package>
<package name="TOUCHBASE">
<polygon width="0.127" layer="1">
<vertex x="0" y="0"/>
<vertex x="34" y="0"/>
<vertex x="34" y="39"/>
<vertex x="-34" y="39"/>
<vertex x="-34" y="0"/>
</polygon>
<pad name="P$1" x="0" y="19" drill="0.6" shape="square"/>
<rectangle x1="-34" y1="0" x2="33.5" y2="33.6" layer="29"/>
</package>
</packages>
<symbols>
<symbol name="TOUCHPOINT">
<polygon width="0.254" layer="94">
<vertex x="5" y="0"/>
<vertex x="5" y="-5"/>
<vertex x="-5" y="-5"/>
<vertex x="-5" y="5"/>
<vertex x="5" y="5"/>
</polygon>
<pin name="PIN1" x="0" y="0" length="point"/>
</symbol>
<symbol name="TOUCHBASE">
<polygon width="0.254" layer="94">
<vertex x="0" y="0"/>
<vertex x="34" y="0"/>
<vertex x="34" y="39"/>
<vertex x="-34" y="39"/>
<vertex x="-34" y="0"/>
</polygon>
<pin name="P$1" x="0" y="17.78" length="point"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="TOUCHPIN">
<gates>
<gate name="G$1" symbol="TOUCHPOINT" x="0" y="0"/>
</gates>
<devices>
<device name="" package="TOUCHPOINT">
<connects>
<connect gate="G$1" pin="PIN1" pad="P$1"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
<deviceset name="TOUCHBASE">
<gates>
<gate name="G$1" symbol="TOUCHBASE" x="0.254" y="-21.082"/>
</gates>
<devices>
<device name="" package="TOUCHBASE">
<connects>
<connect gate="G$1" pin="P$1" pad="P$1"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
</libraries>
<attributes>
</attributes>
<variantdefs>
</variantdefs>
<classes>
<class number="0" name="default" width="0" drill="0">
</class>
</classes>
<parts>
<part name="U$1" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$2" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$3" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$4" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$5" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$6" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$7" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$8" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$9" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$14" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$15" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$16" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$17" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$18" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$19" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$20" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$21" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$22" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$23" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$28" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$29" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$30" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$31" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$32" library="touch-point" deviceset="TOUCHPIN" device=""/>
<part name="U$33" library="touch-point" deviceset="TOUCHBASE" device=""/>
</parts>
<sheets>
<sheet>
<plain>
</plain>
<instances>
<instance part="U$1" gate="G$1" x="0" y="0" smashed="yes"/>
<instance part="U$2" gate="G$1" x="12.7" y="0" smashed="yes"/>
<instance part="U$3" gate="G$1" x="25.4" y="0" smashed="yes"/>
<instance part="U$4" gate="G$1" x="38.1" y="0" smashed="yes"/>
<instance part="U$5" gate="G$1" x="0" y="-12.7" smashed="yes"/>
<instance part="U$6" gate="G$1" x="0" y="-25.4" smashed="yes"/>
<instance part="U$7" gate="G$1" x="0" y="-38.1" smashed="yes"/>
<instance part="U$8" gate="G$1" x="0" y="-50.8" smashed="yes"/>
<instance part="U$9" gate="G$1" x="0" y="-63.5" smashed="yes"/>
<instance part="U$14" gate="G$1" x="12.7" y="-63.5" smashed="yes"/>
<instance part="U$15" gate="G$1" x="12.7" y="-50.8" smashed="yes"/>
<instance part="U$16" gate="G$1" x="12.7" y="-38.1" smashed="yes"/>
<instance part="U$17" gate="G$1" x="11.974940625" y="-25.609640625" smashed="yes"/>
<instance part="U$18" gate="G$1" x="12.7" y="-12.7" smashed="yes"/>
<instance part="U$19" gate="G$1" x="25.4" y="-12.7" smashed="yes"/>
<instance part="U$20" gate="G$1" x="25.4" y="-25.4" smashed="yes"/>
<instance part="U$21" gate="G$1" x="25.4" y="-38.1" smashed="yes"/>
<instance part="U$22" gate="G$1" x="25.4" y="-50.8" smashed="yes"/>
<instance part="U$23" gate="G$1" x="25.4" y="-63.5" smashed="yes"/>
<instance part="U$28" gate="G$1" x="38.1" y="-63.5" smashed="yes"/>
<instance part="U$29" gate="G$1" x="38.1" y="-50.8" smashed="yes"/>
<instance part="U$30" gate="G$1" x="38.1" y="-38.1" smashed="yes"/>
<instance part="U$31" gate="G$1" x="38.1" y="-25.4" smashed="yes"/>
<instance part="U$32" gate="G$1" x="38.1" y="-12.7" smashed="yes"/>
<instance part="U$33" gate="G$1" x="17.78" y="-137.16" smashed="yes"/>
</instances>
<busses>
</busses>
<nets>
<net name="GND" class="0">
<segment>
<wire x1="12.7" y1="-88.9" x2="25.4" y2="-88.9" width="0.1524" layer="91"/>
<junction x="12.7" y="-88.9"/>
<junction x="25.4" y="-88.9"/>
<wire x1="25.4" y1="-76.2" x2="25.4" y2="-88.9" width="0.1524" layer="91"/>
<wire x1="12.91413125" y1="-76.327771875" x2="12.7" y2="-76.327771875" width="0.1524" layer="91"/>
<wire x1="12.7" y1="-76.327771875" x2="12.7" y2="-88.9" width="0.1524" layer="91"/>
<junction x="12.91413125" y="-76.327771875"/>
<wire x1="12.91413125" y1="-76.327771875" x2="12.91413125" y2="-76.2" width="0.1524" layer="91"/>
<wire x1="12.91413125" y1="-76.2" x2="25.4" y2="-76.2" width="0.1524" layer="91"/>
<junction x="25.4" y="-76.2"/>
<pinref part="U$28" gate="G$1" pin="PIN1"/>
<pinref part="U$23" gate="G$1" pin="PIN1"/>
<wire x1="38.1" y1="-63.5" x2="25.4" y2="-63.5" width="0.1524" layer="91"/>
<junction x="38.1" y="-63.5"/>
<wire x1="25.4" y1="-63.5" x2="25.4" y2="-76.2" width="0.1524" layer="91"/>
<junction x="25.4" y="-63.5"/>
<pinref part="U$14" gate="G$1" pin="PIN1"/>
<wire x1="12.91413125" y1="-76.327771875" x2="12.91413125" y2="-63.5" width="0.1524" layer="91"/>
<wire x1="12.91413125" y1="-63.5" x2="12.7" y2="-63.5" width="0.1524" layer="91"/>
<wire x1="12.7" y1="-63.5" x2="25.4" y2="-63.5" width="0.1524" layer="91"/>
<junction x="12.7" y="-63.5"/>
<pinref part="U$9" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-63.5" x2="12.7" y2="-63.5" width="0.1524" layer="91"/>
<junction x="0" y="-63.5"/>
<pinref part="U$8" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-63.5" x2="0" y2="-50.8" width="0.1524" layer="91"/>
<pinref part="U$15" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-50.8" x2="12.7" y2="-50.8" width="0.1524" layer="91"/>
<junction x="0" y="-50.8"/>
<wire x1="12.7" y1="-50.8" x2="12.7" y2="-63.5" width="0.1524" layer="91"/>
<junction x="12.7" y="-50.8"/>
<pinref part="U$22" gate="G$1" pin="PIN1"/>
<wire x1="25.4" y1="-63.5" x2="25.4" y2="-50.8" width="0.1524" layer="91"/>
<wire x1="25.4" y1="-50.8" x2="12.7" y2="-50.8" width="0.1524" layer="91"/>
<junction x="25.4" y="-50.8"/>
<pinref part="U$29" gate="G$1" pin="PIN1"/>
<wire x1="25.4" y1="-50.8" x2="38.1" y2="-50.8" width="0.1524" layer="91"/>
<wire x1="38.1" y1="-50.8" x2="38.1" y2="-63.5" width="0.1524" layer="91"/>
<junction x="38.1" y="-50.8"/>
<pinref part="U$7" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-50.8" x2="0" y2="-38.1" width="0.1524" layer="91"/>
<pinref part="U$16" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-38.1" x2="12.7" y2="-38.1" width="0.1524" layer="91"/>
<junction x="0" y="-38.1"/>
<wire x1="12.7" y1="-38.1" x2="12.7" y2="-50.8" width="0.1524" layer="91"/>
<junction x="12.7" y="-38.1"/>
<pinref part="U$21" gate="G$1" pin="PIN1"/>
<wire x1="12.7" y1="-38.1" x2="25.4" y2="-38.1" width="0.1524" layer="91"/>
<wire x1="25.4" y1="-38.1" x2="25.4" y2="-50.8" width="0.1524" layer="91"/>
<junction x="25.4" y="-38.1"/>
<pinref part="U$30" gate="G$1" pin="PIN1"/>
<wire x1="38.1" y1="-50.8" x2="38.1" y2="-38.1" width="0.1524" layer="91"/>
<wire x1="38.1" y1="-38.1" x2="25.4" y2="-38.1" width="0.1524" layer="91"/>
<junction x="38.1" y="-38.1"/>
<pinref part="U$6" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-38.1" x2="0" y2="-25.4" width="0.1524" layer="91"/>
<junction x="0" y="-25.4"/>
<pinref part="U$20" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-25.4" x2="12.7" y2="-25.4" width="0.1524" layer="91"/>
<pinref part="U$31" gate="G$1" pin="PIN1"/>
<wire x1="12.7" y1="-25.4" x2="25.4" y2="-25.4" width="0.1524" layer="91"/>
<wire x1="25.4" y1="-25.4" x2="38.1" y2="-25.4" width="0.1524" layer="91"/>
<junction x="25.4" y="-25.4"/>
<wire x1="38.1" y1="-25.4" x2="38.1" y2="-38.1" width="0.1524" layer="91"/>
<junction x="38.1" y="-25.4"/>
<wire x1="25.4" y1="-25.4" x2="25.4" y2="-38.1" width="0.1524" layer="91"/>
<pinref part="U$17" gate="G$1" pin="PIN1"/>
<wire x1="11.974940625" y1="-25.609640625" x2="12.7" y2="-25.609640625" width="0.1524" layer="91"/>
<wire x1="12.7" y1="-25.609640625" x2="12.7" y2="-38.1" width="0.1524" layer="91"/>
<pinref part="U$5" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-25.4" x2="0" y2="-12.7" width="0.1524" layer="91"/>
<pinref part="U$18" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-12.7" x2="12.7" y2="-12.7" width="0.1524" layer="91"/>
<junction x="0" y="-12.7"/>
<wire x1="12.7" y1="-25.4" x2="12.7" y2="-12.7" width="0.1524" layer="91"/>
<junction x="12.7" y="-25.4"/>
<junction x="12.7" y="-12.7"/>
<pinref part="U$19" gate="G$1" pin="PIN1"/>
<wire x1="12.7" y1="-12.7" x2="25.4" y2="-12.7" width="0.1524" layer="91"/>
<wire x1="25.4" y1="-12.7" x2="25.4" y2="-25.4" width="0.1524" layer="91"/>
<junction x="25.4" y="-12.7"/>
<pinref part="U$32" gate="G$1" pin="PIN1"/>
<wire x1="38.1" y1="-25.4" x2="38.1" y2="-12.7" width="0.1524" layer="91"/>
<wire x1="38.1" y1="-12.7" x2="25.4" y2="-12.7" width="0.1524" layer="91"/>
<junction x="38.1" y="-12.7"/>
<pinref part="U$1" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="-12.7" x2="0" y2="0" width="0.1524" layer="91"/>
<pinref part="U$2" gate="G$1" pin="PIN1"/>
<wire x1="0" y1="0" x2="12.7" y2="0" width="0.1524" layer="91"/>
<junction x="0" y="0"/>
<wire x1="12.7" y1="0" x2="12.7" y2="-12.7" width="0.1524" layer="91"/>
<junction x="12.7" y="0"/>
<pinref part="U$3" gate="G$1" pin="PIN1"/>
<wire x1="25.4" y1="-12.7" x2="25.4" y2="0" width="0.1524" layer="91"/>
<wire x1="12.7" y1="0" x2="25.4" y2="0" width="0.1524" layer="91"/>
<junction x="25.4" y="0"/>
<pinref part="U$4" gate="G$1" pin="PIN1"/>
<wire x1="25.4" y1="0" x2="38.1" y2="0" width="0.1524" layer="91"/>
<wire x1="38.1" y1="0" x2="38.1" y2="-12.7" width="0.1524" layer="91"/>
<junction x="38.1" y="0"/>
<pinref part="U$33" gate="G$1" pin="P$1"/>
<wire x1="17.78" y1="-119.38" x2="25.4" y2="-119.38" width="0.1524" layer="91"/>
<wire x1="25.4" y1="-119.38" x2="25.4" y2="-88.9" width="0.1524" layer="91"/>
<wire x1="17.78" y1="-119.38" x2="12.7" y2="-119.38" width="0.1524" layer="91"/>
<wire x1="12.7" y1="-119.38" x2="12.7" y2="-88.9" width="0.1524" layer="91"/>
<junction x="17.78" y="-119.38"/>
</segment>
</net>
</nets>
</sheet>
</sheets>
</schematic>
</drawing>
</eagle>
