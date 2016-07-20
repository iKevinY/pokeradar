/** @preserve
 * PokéSprite r49 <https://github.com/msikma/pokesprite>
 * (C) 2014-2015, Michiel Sikma <dada@doubla.de> and PokéSprite contributors
 * (C) 1995-2015 Nintendo/Creatures Inc./GAME FREAK Inc.
 * For a full list of contributors, view the project commit history.
 * Generated on 2015-08-03 03:56:06.
 *
 */
;(function(){

/**
 * PokéSprite main code and icon processor.
 *
 * This class has been generated, so editing it directly is not recommended.
 *
 * @static
 */
window["PkSpr"] = (function()
{
  var self = this;
  
  /**
   * Base CSS class that identifies an element as ours.
   *
   * @const
   * @type {!string}
   */
  self.PKSPR_BASE_CLASS = "pkspr";
  
  /**
   * List of types and their sizes.
   *
   * @const
   * @type {!Object}
   */
  self.PKSPR_TYPES = {"pkmn":{"w":40,"h":30},"etc":{},"body-style":{"w":32,"h":32},"apricorn":{"w":30,"h":30},"battle-item":{"w":30,"h":30},"berry":{"w":30,"h":30},"ev-item":{"w":30,"h":30},"evo-item":{"w":30,"h":30},"flute":{"w":30,"h":30},"fossil":{"w":30,"h":30},"gem":{"w":30,"h":30},"hm":{"w":30,"h":30},"hold-item":{"w":30,"h":30},"incense":{"w":30,"h":30},"other-item":{"w":30,"h":30},"key-item":{"w":30,"h":30},"mail":{"w":30,"h":30},"medicine":{"w":30,"h":30},"mega-stone":{"w":30,"h":30},"mulch":{"w":30,"h":30},"plate":{"w":30,"h":30},"pokeball":{"w":30,"h":30},"scarf":{"w":30,"h":30},"shard":{"w":30,"h":30},"tm":{"w":30,"h":30},"valuable-item":{"w":30,"h":30},"wonder-launcher":{"w":30,"h":30},"status":{"w":10,"h":10}};
  
  /**
   * Coordinate and size data for every single icon. Size data is
   * not included if the type's size can already be found
   * in the PKSPR_TYPES constant.
   *
   * @const
   * @type {!Object}
   */
  self.PKSPR_DATA = {"pkmn":{"bulbasaur":{".":{".":{"regular":{"x":0,"y":0},"shiny":{"x":40,"y":0}}}},"ivysaur":{".":{".":{"regular":{"x":80,"y":0},"shiny":{"x":120,"y":0}}}},"venusaur":{".":{".":{"regular":{"x":160,"y":0},"shiny":{"x":200,"y":0}}},"mega":{".":{"regular":{"x":240,"y":0},"shiny":{"x":280,"y":0}}}},"charmander":{".":{".":{"regular":{"x":320,"y":0},"shiny":{"x":360,"y":0}}}},"charmeleon":{".":{".":{"regular":{"x":400,"y":0},"shiny":{"x":440,"y":0}}}},"charizard":{".":{".":{"regular":{"x":480,"y":0},"shiny":{"x":520,"y":0}}},"mega-x":{".":{"regular":{"x":560,"y":0},"shiny":{"x":600,"y":0}}},"mega-y":{".":{"regular":{"x":640,"y":0},"shiny":{"x":680,"y":0}}}},"squirtle":{".":{".":{"regular":{"x":720,"y":0},"shiny":{"x":760,"y":0}}}},"wartortle":{".":{".":{"regular":{"x":800,"y":0},"shiny":{"x":840,"y":0}}}},"blastoise":{".":{".":{"regular":{"x":880,"y":0},"shiny":{"x":920,"y":0}}},"mega":{".":{"regular":{"x":960,"y":0},"shiny":{"x":1000,"y":0}}}},"caterpie":{".":{".":{"regular":{"x":1040,"y":0},"shiny":{"x":1080,"y":0}}}},"metapod":{".":{".":{"regular":{"x":1120,"y":0},"shiny":{"x":1160,"y":0}}}},"butterfree":{".":{".":{"regular":{"x":1200,"y":0},"shiny":{"x":1240,"y":0}}}},"weedle":{".":{".":{"regular":{"x":0,"y":30},"shiny":{"x":40,"y":30}}}},"kakuna":{".":{".":{"regular":{"x":80,"y":30},"shiny":{"x":120,"y":30}}}},"beedrill":{".":{".":{"regular":{"x":160,"y":30},"shiny":{"x":200,"y":30}}},"mega":{".":{"regular":{"x":240,"y":30},"shiny":{"x":280,"y":30}}}},"pidgey":{".":{".":{"regular":{"x":320,"y":30},"shiny":{"x":360,"y":30}}}},"pidgeotto":{".":{".":{"regular":{"x":400,"y":30},"shiny":{"x":440,"y":30}}}},"pidgeot":{".":{".":{"regular":{"x":480,"y":30},"shiny":{"x":520,"y":30}}},"mega":{".":{"regular":{"x":560,"y":30},"shiny":{"x":600,"y":30}}}},"rattata":{".":{".":{"regular":{"x":640,"y":30},"shiny":{"x":680,"y":30}}}},"raticate":{".":{".":{"regular":{"x":720,"y":30},"shiny":{"x":760,"y":30}}}},"spearow":{".":{".":{"regular":{"x":800,"y":30},"shiny":{"x":840,"y":30}}}},"fearow":{".":{".":{"regular":{"x":880,"y":30},"shiny":{"x":920,"y":30}}}},"ekans":{".":{".":{"regular":{"x":960,"y":30},"shiny":{"x":1000,"y":30}}}},"arbok":{".":{".":{"regular":{"x":1040,"y":30},"shiny":{"x":1080,"y":30}}}},"pikachu":{".":{".":{"regular":{"x":1120,"y":30},"shiny":{"x":1160,"y":30}}},"beautiful":{".":{"regular":{"x":1200,"y":30},"shiny":{"x":0,"y":60}},"right":{"regular":{"x":1240,"y":30},"shiny":{"x":40,"y":60}}},"clever":{".":{"regular":{"x":80,"y":60},"shiny":{"x":120,"y":60}}},"cool":{".":{"regular":{"x":160,"y":60},"shiny":{"x":200,"y":60}}},"cosplay":{".":{"regular":{"x":240,"y":60},"shiny":{"x":280,"y":60}}},"cute":{".":{"regular":{"x":320,"y":60},"shiny":{"x":400,"y":60}},"right":{"regular":{"x":360,"y":60},"shiny":{"x":440,"y":60}}},"tough":{".":{"regular":{"x":480,"y":60},"shiny":{"x":520,"y":60}}}},"raichu":{".":{".":{"regular":{"x":560,"y":60},"shiny":{"x":600,"y":60}}}},"sandshrew":{".":{".":{"regular":{"x":640,"y":60},"shiny":{"x":680,"y":60}}}},"sandslash":{".":{".":{"regular":{"x":720,"y":60},"shiny":{"x":760,"y":60}}}},"nidoran-f":{".":{".":{"regular":{"x":800,"y":60},"shiny":{"x":840,"y":60}}}},"nidorina":{".":{".":{"regular":{"x":880,"y":60},"shiny":{"x":920,"y":60}}}},"nidoqueen":{".":{".":{"regular":{"x":960,"y":60},"shiny":{"x":1000,"y":60}}}},"nidoran-m":{".":{".":{"regular":{"x":1040,"y":60},"shiny":{"x":1080,"y":60}}}},"nidorino":{".":{".":{"regular":{"x":1120,"y":60},"shiny":{"x":1160,"y":60}}}},"nidoking":{".":{".":{"regular":{"x":1200,"y":60},"shiny":{"x":1240,"y":60}}}},"clefairy":{".":{".":{"regular":{"x":0,"y":90},"shiny":{"x":80,"y":90}},"right":{"regular":{"x":40,"y":90},"shiny":{"x":120,"y":90}}}},"clefable":{".":{".":{"regular":{"x":160,"y":90},"shiny":{"x":240,"y":90}},"right":{"regular":{"x":200,"y":90},"shiny":{"x":280,"y":90}}}},"vulpix":{".":{".":{"regular":{"x":320,"y":90},"shiny":{"x":360,"y":90}}}},"ninetales":{".":{".":{"regular":{"x":400,"y":90},"shiny":{"x":440,"y":90}}}},"jigglypuff":{".":{".":{"regular":{"x":480,"y":90},"shiny":{"x":560,"y":90}},"right":{"regular":{"x":520,"y":90},"shiny":{"x":600,"y":90}}}},"wigglytuff":{".":{".":{"regular":{"x":640,"y":90},"shiny":{"x":720,"y":90}},"right":{"regular":{"x":680,"y":90},"shiny":{"x":760,"y":90}}}},"zubat":{".":{".":{"regular":{"x":800,"y":90},"shiny":{"x":840,"y":90}}}},"golbat":{".":{".":{"regular":{"x":880,"y":90},"shiny":{"x":920,"y":90}}}},"oddish":{".":{".":{"regular":{"x":960,"y":90},"shiny":{"x":1000,"y":90}}}},"gloom":{".":{".":{"regular":{"x":1040,"y":90},"shiny":{"x":1080,"y":90}}}},"vileplume":{".":{".":{"regular":{"x":1120,"y":90},"shiny":{"x":1160,"y":90}}}},"paras":{".":{".":{"regular":{"x":1200,"y":90},"shiny":{"x":1240,"y":90}}}},"parasect":{".":{".":{"regular":{"x":0,"y":120},"shiny":{"x":40,"y":120}}}},"venonat":{".":{".":{"regular":{"x":80,"y":120},"shiny":{"x":120,"y":120}}}},"venomoth":{".":{".":{"regular":{"x":160,"y":120},"shiny":{"x":200,"y":120}}}},"diglett":{".":{".":{"regular":{"x":240,"y":120},"shiny":{"x":280,"y":120}}}},"dugtrio":{".":{".":{"regular":{"x":320,"y":120},"shiny":{"x":360,"y":120}}}},"meowth":{".":{".":{"regular":{"x":400,"y":120},"shiny":{"x":440,"y":120}}}},"persian":{".":{".":{"regular":{"x":480,"y":120},"shiny":{"x":520,"y":120}}}},"psyduck":{".":{".":{"regular":{"x":560,"y":120},"shiny":{"x":600,"y":120}}}},"golduck":{".":{".":{"regular":{"x":640,"y":120},"shiny":{"x":680,"y":120}}}},"mankey":{".":{".":{"regular":{"x":720,"y":120},"shiny":{"x":760,"y":120}}}},"primeape":{".":{".":{"regular":{"x":800,"y":120},"shiny":{"x":840,"y":120}}}},"growlithe":{".":{".":{"regular":{"x":880,"y":120},"shiny":{"x":920,"y":120}}}},"arcanine":{".":{".":{"regular":{"x":960,"y":120},"shiny":{"x":1000,"y":120}}}},"poliwag":{".":{".":{"regular":{"x":1040,"y":120},"shiny":{"x":1080,"y":120}}}},"poliwhirl":{".":{".":{"regular":{"x":1120,"y":120},"shiny":{"x":1200,"y":120}},"right":{"regular":{"x":1160,"y":120},"shiny":{"x":1240,"y":120}}}},"poliwrath":{".":{".":{"regular":{"x":0,"y":150},"shiny":{"x":80,"y":150}},"right":{"regular":{"x":40,"y":150},"shiny":{"x":120,"y":150}}}},"abra":{".":{".":{"regular":{"x":160,"y":150},"shiny":{"x":200,"y":150}}}},"kadabra":{".":{".":{"regular":{"x":240,"y":150},"shiny":{"x":280,"y":150}}}},"alakazam":{".":{".":{"regular":{"x":320,"y":150},"shiny":{"x":360,"y":150}}},"mega":{".":{"regular":{"x":400,"y":150},"shiny":{"x":440,"y":150}}}},"machop":{".":{".":{"regular":{"x":480,"y":150},"shiny":{"x":520,"y":150}}}},"machoke":{".":{".":{"regular":{"x":560,"y":150},"shiny":{"x":600,"y":150}}}},"machamp":{".":{".":{"regular":{"x":640,"y":150},"shiny":{"x":680,"y":150}}}},"bellsprout":{".":{".":{"regular":{"x":720,"y":150},"shiny":{"x":760,"y":150}}}},"weepinbell":{".":{".":{"regular":{"x":800,"y":150},"shiny":{"x":840,"y":150}}}},"victreebel":{".":{".":{"regular":{"x":880,"y":150},"shiny":{"x":920,"y":150}}}},"tentacool":{".":{".":{"regular":{"x":960,"y":150},"shiny":{"x":1000,"y":150}}}},"tentacruel":{".":{".":{"regular":{"x":1040,"y":150},"shiny":{"x":1080,"y":150}}}},"geodude":{".":{".":{"regular":{"x":1120,"y":150},"shiny":{"x":1160,"y":150}}}},"graveler":{".":{".":{"regular":{"x":1200,"y":150},"shiny":{"x":1240,"y":150}}}},"golem":{".":{".":{"regular":{"x":0,"y":180},"shiny":{"x":40,"y":180}}}},"ponyta":{".":{".":{"regular":{"x":80,"y":180},"shiny":{"x":120,"y":180}}}},"rapidash":{".":{".":{"regular":{"x":160,"y":180},"shiny":{"x":200,"y":180}}}},"slowpoke":{".":{".":{"regular":{"x":240,"y":180},"shiny":{"x":280,"y":180}}}},"slowbro":{".":{".":{"regular":{"x":320,"y":180},"shiny":{"x":360,"y":180}}},"mega":{".":{"regular":{"x":400,"y":180},"shiny":{"x":440,"y":180}}}},"magnemite":{".":{".":{"regular":{"x":480,"y":180},"shiny":{"x":520,"y":180}}}},"magneton":{".":{".":{"regular":{"x":560,"y":180},"shiny":{"x":600,"y":180}}}},"farfetchd":{".":{".":{"regular":{"x":640,"y":180},"shiny":{"x":680,"y":180}}}},"doduo":{".":{".":{"regular":{"x":720,"y":180},"shiny":{"x":760,"y":180}}}},"dodrio":{".":{".":{"regular":{"x":800,"y":180},"shiny":{"x":840,"y":180}}}},"seel":{".":{".":{"regular":{"x":880,"y":180},"shiny":{"x":920,"y":180}}}},"dewgong":{".":{".":{"regular":{"x":960,"y":180},"shiny":{"x":1000,"y":180}}}},"grimer":{".":{".":{"regular":{"x":1040,"y":180},"shiny":{"x":1080,"y":180}}}},"muk":{".":{".":{"regular":{"x":1120,"y":180},"shiny":{"x":1160,"y":180}}}},"shellder":{".":{".":{"regular":{"x":1200,"y":180},"shiny":{"x":1240,"y":180}}}},"cloyster":{".":{".":{"regular":{"x":0,"y":210},"shiny":{"x":40,"y":210}}}},"gastly":{".":{".":{"regular":{"x":80,"y":210},"shiny":{"x":120,"y":210}}}},"haunter":{".":{".":{"regular":{"x":160,"y":210},"shiny":{"x":200,"y":210}}}},"gengar":{".":{".":{"regular":{"x":240,"y":210},"shiny":{"x":280,"y":210}}},"mega":{".":{"regular":{"x":320,"y":210},"shiny":{"x":360,"y":210}}}},"onix":{".":{".":{"regular":{"x":400,"y":210},"shiny":{"x":440,"y":210}}}},"drowzee":{".":{".":{"regular":{"x":480,"y":210},"shiny":{"x":520,"y":210}}}},"hypno":{".":{".":{"regular":{"x":560,"y":210},"shiny":{"x":600,"y":210}}}},"krabby":{".":{".":{"regular":{"x":640,"y":210},"shiny":{"x":680,"y":210}}}},"kingler":{".":{".":{"regular":{"x":720,"y":210},"shiny":{"x":800,"y":210}},"right":{"regular":{"x":760,"y":210},"shiny":{"x":840,"y":210}}}},"voltorb":{".":{".":{"regular":{"x":880,"y":210},"shiny":{"x":920,"y":210}}}},"electrode":{".":{".":{"regular":{"x":960,"y":210},"shiny":{"x":1000,"y":210}}}},"exeggcute":{".":{".":{"regular":{"x":1040,"y":210},"shiny":{"x":1080,"y":210}}}},"exeggutor":{".":{".":{"regular":{"x":1120,"y":210},"shiny":{"x":1160,"y":210}}}},"cubone":{".":{".":{"regular":{"x":1200,"y":210},"shiny":{"x":1240,"y":210}}}},"marowak":{".":{".":{"regular":{"x":0,"y":240},"shiny":{"x":40,"y":240}}}},"hitmonlee":{".":{".":{"regular":{"x":80,"y":240},"shiny":{"x":120,"y":240}}}},"hitmonchan":{".":{".":{"regular":{"x":160,"y":240},"shiny":{"x":200,"y":240}}}},"lickitung":{".":{".":{"regular":{"x":240,"y":240},"shiny":{"x":280,"y":240}}}},"koffing":{".":{".":{"regular":{"x":320,"y":240},"shiny":{"x":360,"y":240}}}},"weezing":{".":{".":{"regular":{"x":400,"y":240},"shiny":{"x":440,"y":240}}}},"rhyhorn":{".":{".":{"regular":{"x":480,"y":240},"shiny":{"x":520,"y":240}}}},"rhydon":{".":{".":{"regular":{"x":560,"y":240},"shiny":{"x":600,"y":240}}}},"chansey":{".":{".":{"regular":{"x":640,"y":240},"shiny":{"x":680,"y":240}}}},"tangela":{".":{".":{"regular":{"x":720,"y":240},"shiny":{"x":760,"y":240}}}},"kangaskhan":{".":{".":{"regular":{"x":800,"y":240},"shiny":{"x":840,"y":240}}},"mega":{".":{"regular":{"x":880,"y":240},"shiny":{"x":920,"y":240}}}},"horsea":{".":{".":{"regular":{"x":960,"y":240},"shiny":{"x":1000,"y":240}}}},"seadra":{".":{".":{"regular":{"x":1040,"y":240},"shiny":{"x":1080,"y":240}}}},"goldeen":{".":{".":{"regular":{"x":1120,"y":240},"shiny":{"x":1160,"y":240}}}},"seaking":{".":{".":{"regular":{"x":1200,"y":240},"shiny":{"x":1240,"y":240}}}},"staryu":{".":{".":{"regular":{"x":0,"y":270},"shiny":{"x":40,"y":270}}}},"starmie":{".":{".":{"regular":{"x":80,"y":270},"shiny":{"x":120,"y":270}}}},"mr-mime":{".":{".":{"regular":{"x":160,"y":270},"shiny":{"x":200,"y":270}}}},"scyther":{".":{".":{"regular":{"x":240,"y":270},"shiny":{"x":280,"y":270}}}},"jynx":{".":{".":{"regular":{"x":320,"y":270},"shiny":{"x":360,"y":270}}}},"electabuzz":{".":{".":{"regular":{"x":400,"y":270},"shiny":{"x":440,"y":270}}}},"magmar":{".":{".":{"regular":{"x":480,"y":270},"shiny":{"x":520,"y":270}}}},"pinsir":{".":{".":{"regular":{"x":560,"y":270},"shiny":{"x":600,"y":270}}},"mega":{".":{"regular":{"x":640,"y":270},"shiny":{"x":680,"y":270}}}},"tauros":{".":{".":{"regular":{"x":720,"y":270},"shiny":{"x":760,"y":270}}}},"magikarp":{".":{".":{"regular":{"x":800,"y":270},"shiny":{"x":840,"y":270}}}},"gyarados":{".":{".":{"regular":{"x":880,"y":270},"shiny":{"x":920,"y":270}}},"mega":{".":{"regular":{"x":960,"y":270},"shiny":{"x":1000,"y":270}}}},"lapras":{".":{".":{"regular":{"x":1040,"y":270},"shiny":{"x":1080,"y":270}}}},"ditto":{".":{".":{"regular":{"x":1120,"y":270},"shiny":{"x":1160,"y":270}}}},"eevee":{".":{".":{"regular":{"x":1200,"y":270},"shiny":{"x":1240,"y":270}}}},"vaporeon":{".":{".":{"regular":{"x":0,"y":300},"shiny":{"x":40,"y":300}}}},"jolteon":{".":{".":{"regular":{"x":80,"y":300},"shiny":{"x":120,"y":300}}}},"flareon":{".":{".":{"regular":{"x":160,"y":300},"shiny":{"x":200,"y":300}}}},"porygon":{".":{".":{"regular":{"x":240,"y":300},"shiny":{"x":280,"y":300}}}},"omanyte":{".":{".":{"regular":{"x":320,"y":300},"shiny":{"x":360,"y":300}}}},"omastar":{".":{".":{"regular":{"x":400,"y":300},"shiny":{"x":440,"y":300}}}},"kabuto":{".":{".":{"regular":{"x":480,"y":300},"shiny":{"x":520,"y":300}}}},"kabutops":{".":{".":{"regular":{"x":560,"y":300},"shiny":{"x":600,"y":300}}}},"aerodactyl":{".":{".":{"regular":{"x":640,"y":300},"shiny":{"x":680,"y":300}}},"mega":{".":{"regular":{"x":720,"y":300},"shiny":{"x":760,"y":300}}}},"snorlax":{".":{".":{"regular":{"x":800,"y":300},"shiny":{"x":840,"y":300}}}},"articuno":{".":{".":{"regular":{"x":880,"y":300},"shiny":{"x":920,"y":300}}}},"zapdos":{".":{".":{"regular":{"x":960,"y":300},"shiny":{"x":1000,"y":300}}}},"moltres":{".":{".":{"regular":{"x":1040,"y":300},"shiny":{"x":1080,"y":300}}}},"dratini":{".":{".":{"regular":{"x":1120,"y":300},"shiny":{"x":1160,"y":300}}}},"dragonair":{".":{".":{"regular":{"x":1200,"y":300},"shiny":{"x":1240,"y":300}}}},"dragonite":{".":{".":{"regular":{"x":0,"y":330},"shiny":{"x":40,"y":330}}}},"mewtwo":{".":{".":{"regular":{"x":80,"y":330},"shiny":{"x":120,"y":330}}},"mega-x":{".":{"regular":{"x":160,"y":330},"shiny":{"x":200,"y":330}}},"mega-y":{".":{"regular":{"x":240,"y":330},"shiny":{"x":280,"y":330}}}},"mew":{".":{".":{"regular":{"x":320,"y":330},"shiny":{"x":360,"y":330}}}},"chikorita":{".":{".":{"regular":{"x":400,"y":330},"shiny":{"x":440,"y":330}}}},"bayleef":{".":{".":{"regular":{"x":480,"y":330},"shiny":{"x":520,"y":330}}}},"meganium":{".":{".":{"regular":{"x":560,"y":330},"shiny":{"x":600,"y":330}}}},"cyndaquil":{".":{".":{"regular":{"x":640,"y":330},"shiny":{"x":680,"y":330}}}},"quilava":{".":{".":{"regular":{"x":720,"y":330},"shiny":{"x":760,"y":330}}}},"typhlosion":{".":{".":{"regular":{"x":800,"y":330},"shiny":{"x":840,"y":330}}}},"totodile":{".":{".":{"regular":{"x":880,"y":330},"shiny":{"x":920,"y":330}}}},"croconaw":{".":{".":{"regular":{"x":960,"y":330},"shiny":{"x":1040,"y":330}},"right":{"regular":{"x":1000,"y":330},"shiny":{"x":1080,"y":330}}}},"feraligatr":{".":{".":{"regular":{"x":1120,"y":330},"shiny":{"x":1160,"y":330}}}},"sentret":{".":{".":{"regular":{"x":1200,"y":330},"shiny":{"x":1240,"y":330}}}},"furret":{".":{".":{"regular":{"x":0,"y":360},"shiny":{"x":40,"y":360}}}},"hoothoot":{".":{".":{"regular":{"x":80,"y":360},"shiny":{"x":120,"y":360}}}},"noctowl":{".":{".":{"regular":{"x":160,"y":360},"shiny":{"x":200,"y":360}}}},"ledyba":{".":{".":{"regular":{"x":240,"y":360},"shiny":{"x":280,"y":360}}}},"ledian":{".":{".":{"regular":{"x":320,"y":360},"shiny":{"x":360,"y":360}}}},"spinarak":{".":{".":{"regular":{"x":400,"y":360},"shiny":{"x":440,"y":360}}}},"ariados":{".":{".":{"regular":{"x":480,"y":360},"shiny":{"x":520,"y":360}}}},"crobat":{".":{".":{"regular":{"x":560,"y":360},"shiny":{"x":600,"y":360}}}},"chinchou":{".":{".":{"regular":{"x":640,"y":360},"shiny":{"x":680,"y":360}}}},"lanturn":{".":{".":{"regular":{"x":720,"y":360},"shiny":{"x":760,"y":360}}}},"pichu":{".":{".":{"regular":{"x":800,"y":360},"shiny":{"x":840,"y":360}}}},"cleffa":{".":{".":{"regular":{"x":880,"y":360},"shiny":{"x":960,"y":360}},"right":{"regular":{"x":920,"y":360},"shiny":{"x":1000,"y":360}}}},"igglybuff":{".":{".":{"regular":{"x":1040,"y":360},"shiny":{"x":1120,"y":360}},"right":{"regular":{"x":1080,"y":360},"shiny":{"x":1160,"y":360}}}},"togepi":{".":{".":{"regular":{"x":1200,"y":360},"shiny":{"x":1240,"y":360}}}},"togetic":{".":{".":{"regular":{"x":0,"y":390},"shiny":{"x":40,"y":390}}}},"natu":{".":{".":{"regular":{"x":80,"y":390},"shiny":{"x":120,"y":390}}}},"xatu":{".":{".":{"regular":{"x":160,"y":390},"shiny":{"x":200,"y":390}}}},"mareep":{".":{".":{"regular":{"x":240,"y":390},"shiny":{"x":280,"y":390}}}},"flaaffy":{".":{".":{"regular":{"x":320,"y":390},"shiny":{"x":360,"y":390}}}},"ampharos":{".":{".":{"regular":{"x":400,"y":390},"shiny":{"x":440,"y":390}}},"mega":{".":{"regular":{"x":480,"y":390},"shiny":{"x":520,"y":390}}}},"bellossom":{".":{".":{"regular":{"x":560,"y":390},"shiny":{"x":600,"y":390}}}},"marill":{".":{".":{"regular":{"x":640,"y":390},"shiny":{"x":680,"y":390}}}},"azumarill":{".":{".":{"regular":{"x":720,"y":390},"shiny":{"x":760,"y":390}}}},"sudowoodo":{".":{".":{"regular":{"x":800,"y":390},"shiny":{"x":840,"y":390}}}},"politoed":{".":{".":{"regular":{"x":880,"y":390},"shiny":{"x":960,"y":390}},"right":{"regular":{"x":920,"y":390},"shiny":{"x":1000,"y":390}}}},"hoppip":{".":{".":{"regular":{"x":1040,"y":390},"shiny":{"x":1080,"y":390}}}},"skiploom":{".":{".":{"regular":{"x":1120,"y":390},"shiny":{"x":1160,"y":390}}}},"jumpluff":{".":{".":{"regular":{"x":1200,"y":390},"shiny":{"x":1240,"y":390}}}},"aipom":{".":{".":{"regular":{"x":0,"y":420},"shiny":{"x":40,"y":420}}}},"sunkern":{".":{".":{"regular":{"x":80,"y":420},"shiny":{"x":120,"y":420}}}},"sunflora":{".":{".":{"regular":{"x":160,"y":420},"shiny":{"x":200,"y":420}}}},"yanma":{".":{".":{"regular":{"x":240,"y":420},"shiny":{"x":280,"y":420}}}},"wooper":{".":{".":{"regular":{"x":320,"y":420},"shiny":{"x":360,"y":420}}}},"quagsire":{".":{".":{"regular":{"x":400,"y":420},"shiny":{"x":440,"y":420}}}},"espeon":{".":{".":{"regular":{"x":480,"y":420},"shiny":{"x":520,"y":420}}}},"umbreon":{".":{".":{"regular":{"x":560,"y":420},"shiny":{"x":600,"y":420}}}},"murkrow":{".":{".":{"regular":{"x":640,"y":420},"shiny":{"x":680,"y":420}}}},"slowking":{".":{".":{"regular":{"x":720,"y":420},"shiny":{"x":760,"y":420}}}},"misdreavus":{".":{".":{"regular":{"x":800,"y":420},"shiny":{"x":840,"y":420}}}},"unown":{".":{".":{"regular":{"x":880,"y":420},"shiny":{"x":920,"y":420}}},"a":{".":{"regular":{"x":880,"y":420},"shiny":{"x":920,"y":420}}},"b":{".":{"regular":{"x":960,"y":420},"shiny":{"x":1040,"y":420}},"right":{"regular":{"x":1000,"y":420},"shiny":{"x":1080,"y":420}}},"c":{".":{"regular":{"x":1120,"y":420},"shiny":{"x":1200,"y":420}},"right":{"regular":{"x":1160,"y":420},"shiny":{"x":1240,"y":420}}},"d":{".":{"regular":{"x":0,"y":450},"shiny":{"x":80,"y":450}},"right":{"regular":{"x":40,"y":450},"shiny":{"x":120,"y":450}}},"e":{".":{"regular":{"x":160,"y":450},"shiny":{"x":240,"y":450}},"right":{"regular":{"x":200,"y":450},"shiny":{"x":280,"y":450}}},"exclamation":{".":{"regular":{"x":320,"y":450},"shiny":{"x":360,"y":450}}},"f":{".":{"regular":{"x":400,"y":450},"shiny":{"x":480,"y":450}},"right":{"regular":{"x":440,"y":450},"shiny":{"x":520,"y":450}}},"g":{".":{"regular":{"x":560,"y":450},"shiny":{"x":640,"y":450}},"right":{"regular":{"x":600,"y":450},"shiny":{"x":680,"y":450}}},"h":{".":{"regular":{"x":720,"y":450},"shiny":{"x":800,"y":450}},"right":{"regular":{"x":760,"y":450},"shiny":{"x":840,"y":450}}},"i":{".":{"regular":{"x":880,"y":450},"shiny":{"x":920,"y":450}}},"j":{".":{"regular":{"x":960,"y":450},"shiny":{"x":1040,"y":450}},"right":{"regular":{"x":1000,"y":450},"shiny":{"x":1080,"y":450}}},"k":{".":{"regular":{"x":1120,"y":450},"shiny":{"x":1200,"y":450}},"right":{"regular":{"x":1160,"y":450},"shiny":{"x":1240,"y":450}}},"l":{".":{"regular":{"x":0,"y":480},"shiny":{"x":80,"y":480}},"right":{"regular":{"x":40,"y":480},"shiny":{"x":120,"y":480}}},"m":{".":{"regular":{"x":160,"y":480},"shiny":{"x":240,"y":480}},"right":{"regular":{"x":200,"y":480},"shiny":{"x":280,"y":480}}},"n":{".":{"regular":{"x":320,"y":480},"shiny":{"x":400,"y":480}},"right":{"regular":{"x":360,"y":480},"shiny":{"x":440,"y":480}}},"o":{".":{"regular":{"x":480,"y":480},"shiny":{"x":520,"y":480}}},"p":{".":{"regular":{"x":560,"y":480},"shiny":{"x":640,"y":480}},"right":{"regular":{"x":600,"y":480},"shiny":{"x":680,"y":480}}},"q":{".":{"regular":{"x":720,"y":480},"shiny":{"x":800,"y":480}},"right":{"regular":{"x":760,"y":480},"shiny":{"x":840,"y":480}}},"question":{".":{"regular":{"x":880,"y":480},"shiny":{"x":960,"y":480}},"right":{"regular":{"x":920,"y":480},"shiny":{"x":1000,"y":480}}},"r":{".":{"regular":{"x":1040,"y":480},"shiny":{"x":1120,"y":480}},"right":{"regular":{"x":1080,"y":480},"shiny":{"x":1160,"y":480}}},"s":{".":{"regular":{"x":1200,"y":480},"shiny":{"x":0,"y":510}},"right":{"regular":{"x":1240,"y":480},"shiny":{"x":40,"y":510}}},"t":{".":{"regular":{"x":80,"y":510},"shiny":{"x":160,"y":510}},"right":{"regular":{"x":120,"y":510},"shiny":{"x":200,"y":510}}},"u":{".":{"regular":{"x":240,"y":510},"shiny":{"x":280,"y":510}}},"v":{".":{"regular":{"x":320,"y":510},"shiny":{"x":400,"y":510}},"right":{"regular":{"x":360,"y":510},"shiny":{"x":440,"y":510}}},"w":{".":{"regular":{"x":480,"y":510},"shiny":{"x":520,"y":510}}},"x":{".":{"regular":{"x":560,"y":510},"shiny":{"x":600,"y":510}}},"y":{".":{"regular":{"x":640,"y":510},"shiny":{"x":680,"y":510}}},"z":{".":{"regular":{"x":720,"y":510},"shiny":{"x":800,"y":510}},"right":{"regular":{"x":760,"y":510},"shiny":{"x":840,"y":510}}}},"wobbuffet":{".":{".":{"regular":{"x":880,"y":510},"shiny":{"x":920,"y":510}}}},"girafarig":{".":{".":{"regular":{"x":960,"y":510},"shiny":{"x":1000,"y":510}}}},"pineco":{".":{".":{"regular":{"x":1040,"y":510},"shiny":{"x":1080,"y":510}}}},"forretress":{".":{".":{"regular":{"x":1120,"y":510},"shiny":{"x":1160,"y":510}}}},"dunsparce":{".":{".":{"regular":{"x":1200,"y":510},"shiny":{"x":1240,"y":510}}}},"gligar":{".":{".":{"regular":{"x":0,"y":540},"shiny":{"x":40,"y":540}}}},"steelix":{".":{".":{"regular":{"x":80,"y":540},"shiny":{"x":120,"y":540}}},"mega":{".":{"regular":{"x":160,"y":540},"shiny":{"x":200,"y":540}}}},"snubbull":{".":{".":{"regular":{"x":240,"y":540},"shiny":{"x":280,"y":540}}}},"granbull":{".":{".":{"regular":{"x":320,"y":540},"shiny":{"x":360,"y":540}}}},"qwilfish":{".":{".":{"regular":{"x":400,"y":540},"shiny":{"x":440,"y":540}}}},"scizor":{".":{".":{"regular":{"x":480,"y":540},"shiny":{"x":520,"y":540}}},"mega":{".":{"regular":{"x":560,"y":540},"shiny":{"x":600,"y":540}}}},"shuckle":{".":{".":{"regular":{"x":640,"y":540},"shiny":{"x":680,"y":540}}}},"heracross":{".":{".":{"regular":{"x":720,"y":540},"shiny":{"x":760,"y":540}}},"mega":{".":{"regular":{"x":800,"y":540},"shiny":{"x":840,"y":540}}}},"sneasel":{".":{".":{"regular":{"x":880,"y":540},"shiny":{"x":960,"y":540}},"right":{"regular":{"x":920,"y":540},"shiny":{"x":1000,"y":540}}}},"teddiursa":{".":{".":{"regular":{"x":1040,"y":540},"shiny":{"x":1120,"y":540}},"right":{"regular":{"x":1080,"y":540},"shiny":{"x":1160,"y":540}}}},"ursaring":{".":{".":{"regular":{"x":1200,"y":540},"shiny":{"x":1240,"y":540}}}},"slugma":{".":{".":{"regular":{"x":0,"y":570},"shiny":{"x":40,"y":570}}}},"magcargo":{".":{".":{"regular":{"x":80,"y":570},"shiny":{"x":120,"y":570}}}},"swinub":{".":{".":{"regular":{"x":160,"y":570},"shiny":{"x":200,"y":570}}}},"piloswine":{".":{".":{"regular":{"x":240,"y":570},"shiny":{"x":280,"y":570}}}},"corsola":{".":{".":{"regular":{"x":320,"y":570},"shiny":{"x":360,"y":570}}}},"remoraid":{".":{".":{"regular":{"x":400,"y":570},"shiny":{"x":440,"y":570}}}},"octillery":{".":{".":{"regular":{"x":480,"y":570},"shiny":{"x":520,"y":570}}}},"delibird":{".":{".":{"regular":{"x":560,"y":570},"shiny":{"x":600,"y":570}}}},"mantine":{".":{".":{"regular":{"x":640,"y":570},"shiny":{"x":680,"y":570}}}},"skarmory":{".":{".":{"regular":{"x":720,"y":570},"shiny":{"x":760,"y":570}}}},"houndour":{".":{".":{"regular":{"x":800,"y":570},"shiny":{"x":840,"y":570}}}},"houndoom":{".":{".":{"regular":{"x":880,"y":570},"shiny":{"x":920,"y":570}}},"mega":{".":{"regular":{"x":960,"y":570},"shiny":{"x":1000,"y":570}}}},"kingdra":{".":{".":{"regular":{"x":1040,"y":570},"shiny":{"x":1080,"y":570}}}},"phanpy":{".":{".":{"regular":{"x":1120,"y":570},"shiny":{"x":1160,"y":570}}}},"donphan":{".":{".":{"regular":{"x":1200,"y":570},"shiny":{"x":1240,"y":570}}}},"porygon2":{".":{".":{"regular":{"x":0,"y":600},"shiny":{"x":40,"y":600}}}},"stantler":{".":{".":{"regular":{"x":80,"y":600},"shiny":{"x":120,"y":600}}}},"smeargle":{".":{".":{"regular":{"x":160,"y":600},"shiny":{"x":200,"y":600}}}},"tyrogue":{".":{".":{"regular":{"x":240,"y":600},"shiny":{"x":280,"y":600}}}},"hitmontop":{".":{".":{"regular":{"x":320,"y":600},"shiny":{"x":360,"y":600}}}},"smoochum":{".":{".":{"regular":{"x":400,"y":600},"shiny":{"x":440,"y":600}}}},"elekid":{".":{".":{"regular":{"x":480,"y":600},"shiny":{"x":520,"y":600}}}},"magby":{".":{".":{"regular":{"x":560,"y":600},"shiny":{"x":600,"y":600}}}},"miltank":{".":{".":{"regular":{"x":640,"y":600},"shiny":{"x":680,"y":600}}}},"blissey":{".":{".":{"regular":{"x":720,"y":600},"shiny":{"x":760,"y":600}}}},"raikou":{".":{".":{"regular":{"x":800,"y":600},"shiny":{"x":840,"y":600}}}},"entei":{".":{".":{"regular":{"x":880,"y":600},"shiny":{"x":920,"y":600}}}},"suicune":{".":{".":{"regular":{"x":960,"y":600},"shiny":{"x":1000,"y":600}}}},"larvitar":{".":{".":{"regular":{"x":1040,"y":600},"shiny":{"x":1080,"y":600}}}},"pupitar":{".":{".":{"regular":{"x":1120,"y":600},"shiny":{"x":1160,"y":600}}}},"tyranitar":{".":{".":{"regular":{"x":1200,"y":600},"shiny":{"x":1240,"y":600}}},"mega":{".":{"regular":{"x":0,"y":630},"shiny":{"x":40,"y":630}}}},"lugia":{".":{".":{"regular":{"x":80,"y":630},"shiny":{"x":120,"y":630}}}},"ho-oh":{".":{".":{"regular":{"x":160,"y":630},"shiny":{"x":200,"y":630}}}},"celebi":{".":{".":{"regular":{"x":240,"y":630},"shiny":{"x":280,"y":630}}}},"treecko":{".":{".":{"regular":{"x":320,"y":630},"shiny":{"x":360,"y":630}}}},"grovyle":{".":{".":{"regular":{"x":400,"y":630},"shiny":{"x":440,"y":630}}}},"sceptile":{".":{".":{"regular":{"x":480,"y":630},"shiny":{"x":520,"y":630}}},"mega":{".":{"regular":{"x":560,"y":630},"shiny":{"x":600,"y":630}}}},"torchic":{".":{".":{"regular":{"x":640,"y":630},"shiny":{"x":680,"y":630}}}},"combusken":{".":{".":{"regular":{"x":720,"y":630},"shiny":{"x":760,"y":630}}}},"blaziken":{".":{".":{"regular":{"x":800,"y":630},"shiny":{"x":840,"y":630}}},"mega":{".":{"regular":{"x":880,"y":630},"shiny":{"x":920,"y":630}}}},"mudkip":{".":{".":{"regular":{"x":960,"y":630},"shiny":{"x":1000,"y":630}}}},"marshtomp":{".":{".":{"regular":{"x":1040,"y":630},"shiny":{"x":1080,"y":630}}}},"swampert":{".":{".":{"regular":{"x":1120,"y":630},"shiny":{"x":1160,"y":630}}},"mega":{".":{"regular":{"x":1200,"y":630},"shiny":{"x":1240,"y":630}}}},"poochyena":{".":{".":{"regular":{"x":0,"y":660},"shiny":{"x":40,"y":660}}}},"mightyena":{".":{".":{"regular":{"x":80,"y":660},"shiny":{"x":120,"y":660}}}},"zigzagoon":{".":{".":{"regular":{"x":160,"y":660},"shiny":{"x":200,"y":660}}}},"linoone":{".":{".":{"regular":{"x":240,"y":660},"shiny":{"x":280,"y":660}}}},"wurmple":{".":{".":{"regular":{"x":320,"y":660},"shiny":{"x":360,"y":660}}}},"silcoon":{".":{".":{"regular":{"x":400,"y":660},"shiny":{"x":440,"y":660}}}},"beautifly":{".":{".":{"regular":{"x":480,"y":660},"shiny":{"x":520,"y":660}}}},"cascoon":{".":{".":{"regular":{"x":560,"y":660},"shiny":{"x":600,"y":660}}}},"dustox":{".":{".":{"regular":{"x":640,"y":660},"shiny":{"x":680,"y":660}}}},"lotad":{".":{".":{"regular":{"x":720,"y":660},"shiny":{"x":760,"y":660}}}},"lombre":{".":{".":{"regular":{"x":800,"y":660},"shiny":{"x":840,"y":660}}}},"ludicolo":{".":{".":{"regular":{"x":880,"y":660},"shiny":{"x":920,"y":660}}}},"seedot":{".":{".":{"regular":{"x":960,"y":660},"shiny":{"x":1000,"y":660}}}},"nuzleaf":{".":{".":{"regular":{"x":1040,"y":660},"shiny":{"x":1080,"y":660}}}},"shiftry":{".":{".":{"regular":{"x":1120,"y":660},"shiny":{"x":1160,"y":660}}}},"taillow":{".":{".":{"regular":{"x":1200,"y":660},"shiny":{"x":1240,"y":660}}}},"swellow":{".":{".":{"regular":{"x":0,"y":690},"shiny":{"x":40,"y":690}}}},"wingull":{".":{".":{"regular":{"x":80,"y":690},"shiny":{"x":120,"y":690}}}},"pelipper":{".":{".":{"regular":{"x":160,"y":690},"shiny":{"x":200,"y":690}}}},"ralts":{".":{".":{"regular":{"x":240,"y":690},"shiny":{"x":280,"y":690}}}},"kirlia":{".":{".":{"regular":{"x":320,"y":690},"shiny":{"x":360,"y":690}}}},"gardevoir":{".":{".":{"regular":{"x":400,"y":690},"shiny":{"x":440,"y":690}}},"mega":{".":{"regular":{"x":480,"y":690},"shiny":{"x":520,"y":690}}}},"surskit":{".":{".":{"regular":{"x":560,"y":690},"shiny":{"x":600,"y":690}}}},"masquerain":{".":{".":{"regular":{"x":640,"y":690},"shiny":{"x":680,"y":690}}}},"shroomish":{".":{".":{"regular":{"x":720,"y":690},"shiny":{"x":760,"y":690}}}},"breloom":{".":{".":{"regular":{"x":800,"y":690},"shiny":{"x":840,"y":690}}}},"slakoth":{".":{".":{"regular":{"x":880,"y":690},"shiny":{"x":920,"y":690}}}},"vigoroth":{".":{".":{"regular":{"x":960,"y":690},"shiny":{"x":1000,"y":690}}}},"slaking":{".":{".":{"regular":{"x":1040,"y":690},"shiny":{"x":1080,"y":690}}}},"nincada":{".":{".":{"regular":{"x":1120,"y":690},"shiny":{"x":1160,"y":690}}}},"ninjask":{".":{".":{"regular":{"x":1200,"y":690},"shiny":{"x":1240,"y":690}}}},"shedinja":{".":{".":{"regular":{"x":0,"y":720},"shiny":{"x":40,"y":720}}}},"whismur":{".":{".":{"regular":{"x":80,"y":720},"shiny":{"x":120,"y":720}}}},"loudred":{".":{".":{"regular":{"x":160,"y":720},"shiny":{"x":200,"y":720}}}},"exploud":{".":{".":{"regular":{"x":240,"y":720},"shiny":{"x":280,"y":720}}}},"makuhita":{".":{".":{"regular":{"x":320,"y":720},"shiny":{"x":360,"y":720}}}},"hariyama":{".":{".":{"regular":{"x":400,"y":720},"shiny":{"x":440,"y":720}}}},"azurill":{".":{".":{"regular":{"x":480,"y":720},"shiny":{"x":520,"y":720}}}},"nosepass":{".":{".":{"regular":{"x":560,"y":720},"shiny":{"x":600,"y":720}}}},"skitty":{".":{".":{"regular":{"x":640,"y":720},"shiny":{"x":680,"y":720}}}},"delcatty":{".":{".":{"regular":{"x":720,"y":720},"shiny":{"x":760,"y":720}}}},"sableye":{".":{".":{"regular":{"x":800,"y":720},"shiny":{"x":840,"y":720}}},"mega":{".":{"regular":{"x":880,"y":720},"shiny":{"x":920,"y":720}}}},"mawile":{".":{".":{"regular":{"x":960,"y":720},"shiny":{"x":1000,"y":720}}},"mega":{".":{"regular":{"x":1040,"y":720},"shiny":{"x":1080,"y":720}}}},"aron":{".":{".":{"regular":{"x":1120,"y":720},"shiny":{"x":1160,"y":720}}}},"lairon":{".":{".":{"regular":{"x":1200,"y":720},"shiny":{"x":1240,"y":720}}}},"aggron":{".":{".":{"regular":{"x":0,"y":750},"shiny":{"x":40,"y":750}}},"mega":{".":{"regular":{"x":80,"y":750},"shiny":{"x":120,"y":750}}}},"meditite":{".":{".":{"regular":{"x":160,"y":750},"shiny":{"x":200,"y":750}}}},"medicham":{".":{".":{"regular":{"x":240,"y":750},"shiny":{"x":280,"y":750}}},"mega":{".":{"regular":{"x":320,"y":750},"shiny":{"x":360,"y":750}}}},"electrike":{".":{".":{"regular":{"x":400,"y":750},"shiny":{"x":440,"y":750}}}},"manectric":{".":{".":{"regular":{"x":480,"y":750},"shiny":{"x":520,"y":750}}},"mega":{".":{"regular":{"x":560,"y":750},"shiny":{"x":600,"y":750}}}},"plusle":{".":{".":{"regular":{"x":640,"y":750},"shiny":{"x":680,"y":750}}}},"minun":{".":{".":{"regular":{"x":720,"y":750},"shiny":{"x":760,"y":750}}}},"volbeat":{".":{".":{"regular":{"x":800,"y":750},"shiny":{"x":840,"y":750}}}},"illumise":{".":{".":{"regular":{"x":880,"y":750},"shiny":{"x":920,"y":750}}}},"roselia":{".":{".":{"regular":{"x":960,"y":750},"shiny":{"x":1040,"y":750}},"right":{"regular":{"x":1000,"y":750},"shiny":{"x":1080,"y":750}}}},"gulpin":{".":{".":{"regular":{"x":1120,"y":750},"shiny":{"x":1160,"y":750}}}},"swalot":{".":{".":{"regular":{"x":1200,"y":750},"shiny":{"x":1240,"y":750}}}},"carvanha":{".":{".":{"regular":{"x":0,"y":780},"shiny":{"x":40,"y":780}}}},"sharpedo":{".":{".":{"regular":{"x":80,"y":780},"shiny":{"x":120,"y":780}}},"mega":{".":{"regular":{"x":160,"y":780},"shiny":{"x":200,"y":780}}}},"wailmer":{".":{".":{"regular":{"x":240,"y":780},"shiny":{"x":280,"y":780}}}},"wailord":{".":{".":{"regular":{"x":320,"y":780},"shiny":{"x":360,"y":780}}}},"numel":{".":{".":{"regular":{"x":400,"y":780},"shiny":{"x":440,"y":780}}}},"camerupt":{".":{".":{"regular":{"x":480,"y":780},"shiny":{"x":520,"y":780}}},"mega":{".":{"regular":{"x":560,"y":780},"shiny":{"x":600,"y":780}}}},"torkoal":{".":{".":{"regular":{"x":640,"y":780},"shiny":{"x":680,"y":780}}}},"spoink":{".":{".":{"regular":{"x":720,"y":780},"shiny":{"x":760,"y":780}}}},"grumpig":{".":{".":{"regular":{"x":800,"y":780},"shiny":{"x":840,"y":780}}}},"spinda":{".":{".":{"regular":{"x":880,"y":780},"shiny":{"x":920,"y":780}}}},"trapinch":{".":{".":{"regular":{"x":960,"y":780},"shiny":{"x":1000,"y":780}}}},"vibrava":{".":{".":{"regular":{"x":1040,"y":780},"shiny":{"x":1080,"y":780}}}},"flygon":{".":{".":{"regular":{"x":1120,"y":780},"shiny":{"x":1160,"y":780}}}},"cacnea":{".":{".":{"regular":{"x":1200,"y":780},"shiny":{"x":1240,"y":780}}}},"cacturne":{".":{".":{"regular":{"x":0,"y":810},"shiny":{"x":40,"y":810}}}},"swablu":{".":{".":{"regular":{"x":80,"y":810},"shiny":{"x":120,"y":810}}}},"altaria":{".":{".":{"regular":{"x":160,"y":810},"shiny":{"x":200,"y":810}}},"mega":{".":{"regular":{"x":240,"y":810},"shiny":{"x":280,"y":810}}}},"zangoose":{".":{".":{"regular":{"x":320,"y":810},"shiny":{"x":400,"y":810}},"right":{"regular":{"x":360,"y":810},"shiny":{"x":440,"y":810}}}},"seviper":{".":{".":{"regular":{"x":480,"y":810},"shiny":{"x":560,"y":810}},"right":{"regular":{"x":520,"y":810},"shiny":{"x":600,"y":810}}}},"lunatone":{".":{".":{"regular":{"x":640,"y":810},"shiny":{"x":680,"y":810}}}},"solrock":{".":{".":{"regular":{"x":720,"y":810},"shiny":{"x":760,"y":810}}}},"barboach":{".":{".":{"regular":{"x":800,"y":810},"shiny":{"x":840,"y":810}}}},"whiscash":{".":{".":{"regular":{"x":880,"y":810},"shiny":{"x":920,"y":810}}}},"corphish":{".":{".":{"regular":{"x":960,"y":810},"shiny":{"x":1000,"y":810}}}},"crawdaunt":{".":{".":{"regular":{"x":1040,"y":810},"shiny":{"x":1080,"y":810}}}},"baltoy":{".":{".":{"regular":{"x":1120,"y":810},"shiny":{"x":1160,"y":810}}}},"claydol":{".":{".":{"regular":{"x":1200,"y":810},"shiny":{"x":1240,"y":810}}}},"lileep":{".":{".":{"regular":{"x":0,"y":840},"shiny":{"x":40,"y":840}}}},"cradily":{".":{".":{"regular":{"x":80,"y":840},"shiny":{"x":120,"y":840}}}},"anorith":{".":{".":{"regular":{"x":160,"y":840},"shiny":{"x":200,"y":840}}}},"armaldo":{".":{".":{"regular":{"x":240,"y":840},"shiny":{"x":280,"y":840}}}},"feebas":{".":{".":{"regular":{"x":320,"y":840},"shiny":{"x":360,"y":840}}}},"milotic":{".":{".":{"regular":{"x":400,"y":840},"shiny":{"x":440,"y":840}}}},"castform":{".":{".":{"regular":{"x":480,"y":840},"shiny":{"x":520,"y":840}}},"rainy":{".":{"regular":{"x":560,"y":840},"shiny":{"x":600,"y":840}}},"snowy":{".":{"regular":{"x":640,"y":840},"shiny":{"x":720,"y":840}},"right":{"regular":{"x":680,"y":840},"shiny":{"x":760,"y":840}}},"sunny":{".":{"regular":{"x":800,"y":840},"shiny":{"x":840,"y":840}}}},"kecleon":{".":{".":{"regular":{"x":880,"y":840},"shiny":{"x":920,"y":840}}}},"shuppet":{".":{".":{"regular":{"x":960,"y":840},"shiny":{"x":1000,"y":840}}}},"banette":{".":{".":{"regular":{"x":1040,"y":840},"shiny":{"x":1080,"y":840}}},"mega":{".":{"regular":{"x":1120,"y":840},"shiny":{"x":1160,"y":840}}}},"duskull":{".":{".":{"regular":{"x":1200,"y":840},"shiny":{"x":1240,"y":840}}}},"dusclops":{".":{".":{"regular":{"x":0,"y":870},"shiny":{"x":40,"y":870}}}},"tropius":{".":{".":{"regular":{"x":80,"y":870},"shiny":{"x":120,"y":870}}}},"chimecho":{".":{".":{"regular":{"x":160,"y":870},"shiny":{"x":200,"y":870}}}},"absol":{".":{".":{"regular":{"x":240,"y":870},"shiny":{"x":320,"y":870}},"right":{"regular":{"x":280,"y":870},"shiny":{"x":360,"y":870}}},"mega":{".":{"regular":{"x":400,"y":870},"shiny":{"x":480,"y":870}},"right":{"regular":{"x":440,"y":870},"shiny":{"x":520,"y":870}}}},"wynaut":{".":{".":{"regular":{"x":560,"y":870},"shiny":{"x":600,"y":870}}}},"snorunt":{".":{".":{"regular":{"x":640,"y":870},"shiny":{"x":680,"y":870}}}},"glalie":{".":{".":{"regular":{"x":720,"y":870},"shiny":{"x":760,"y":870}}},"mega":{".":{"regular":{"x":800,"y":870},"shiny":{"x":840,"y":870}}}},"spheal":{".":{".":{"regular":{"x":880,"y":870},"shiny":{"x":920,"y":870}}}},"sealeo":{".":{".":{"regular":{"x":960,"y":870},"shiny":{"x":1000,"y":870}}}},"walrein":{".":{".":{"regular":{"x":1040,"y":870},"shiny":{"x":1080,"y":870}}}},"clamperl":{".":{".":{"regular":{"x":1120,"y":870},"shiny":{"x":1160,"y":870}}}},"huntail":{".":{".":{"regular":{"x":1200,"y":870},"shiny":{"x":1240,"y":870}}}},"gorebyss":{".":{".":{"regular":{"x":0,"y":900},"shiny":{"x":40,"y":900}}}},"relicanth":{".":{".":{"regular":{"x":80,"y":900},"shiny":{"x":120,"y":900}}}},"luvdisc":{".":{".":{"regular":{"x":160,"y":900},"shiny":{"x":200,"y":900}}}},"bagon":{".":{".":{"regular":{"x":240,"y":900},"shiny":{"x":280,"y":900}}}},"shelgon":{".":{".":{"regular":{"x":320,"y":900},"shiny":{"x":360,"y":900}}}},"salamence":{".":{".":{"regular":{"x":400,"y":900},"shiny":{"x":440,"y":900}}},"mega":{".":{"regular":{"x":480,"y":900},"shiny":{"x":520,"y":900}}}},"beldum":{".":{".":{"regular":{"x":560,"y":900},"shiny":{"x":600,"y":900}}}},"metang":{".":{".":{"regular":{"x":640,"y":900},"shiny":{"x":680,"y":900}}}},"metagross":{".":{".":{"regular":{"x":720,"y":900},"shiny":{"x":760,"y":900}}},"mega":{".":{"regular":{"x":800,"y":900},"shiny":{"x":840,"y":900}}}},"regirock":{".":{".":{"regular":{"x":880,"y":900},"shiny":{"x":960,"y":900}},"right":{"regular":{"x":920,"y":900},"shiny":{"x":1000,"y":900}}}},"regice":{".":{".":{"regular":{"x":1040,"y":900},"shiny":{"x":1080,"y":900}}}},"registeel":{".":{".":{"regular":{"x":1120,"y":900},"shiny":{"x":1160,"y":900}}}},"latias":{".":{".":{"regular":{"x":1200,"y":900},"shiny":{"x":1240,"y":900}}},"mega":{".":{"regular":{"x":0,"y":930},"shiny":{"x":40,"y":930}}}},"latios":{".":{".":{"regular":{"x":80,"y":930},"shiny":{"x":120,"y":930}}},"mega":{".":{"regular":{"x":160,"y":930},"shiny":{"x":200,"y":930}}}},"kyogre":{".":{".":{"regular":{"x":240,"y":930},"shiny":{"x":280,"y":930}}},"primal":{".":{"regular":{"x":320,"y":930},"shiny":{"x":360,"y":930}}}},"groudon":{".":{".":{"regular":{"x":400,"y":930},"shiny":{"x":440,"y":930}}},"primal":{".":{"regular":{"x":480,"y":930},"shiny":{"x":520,"y":930}}}},"rayquaza":{".":{".":{"regular":{"x":560,"y":930},"shiny":{"x":600,"y":930}}},"mega":{".":{"regular":{"x":640,"y":930},"shiny":{"x":680,"y":930}}}},"jirachi":{".":{".":{"regular":{"x":720,"y":930},"shiny":{"x":760,"y":930}}}},"deoxys":{".":{".":{"regular":{"x":800,"y":930},"shiny":{"x":840,"y":930}}},"attack":{".":{"regular":{"x":880,"y":930},"shiny":{"x":920,"y":930}}},"defense":{".":{"regular":{"x":960,"y":930},"shiny":{"x":1000,"y":930}}},"normal":{".":{"regular":{"x":800,"y":930},"shiny":{"x":840,"y":930}}},"speed":{".":{"regular":{"x":1040,"y":930},"shiny":{"x":1080,"y":930}}}},"turtwig":{".":{".":{"regular":{"x":1120,"y":930},"shiny":{"x":1160,"y":930}}}},"grotle":{".":{".":{"regular":{"x":1200,"y":930},"shiny":{"x":1240,"y":930}}}},"torterra":{".":{".":{"regular":{"x":0,"y":960},"shiny":{"x":80,"y":960}},"right":{"regular":{"x":40,"y":960},"shiny":{"x":120,"y":960}}}},"chimchar":{".":{".":{"regular":{"x":160,"y":960},"shiny":{"x":200,"y":960}}}},"monferno":{".":{".":{"regular":{"x":240,"y":960},"shiny":{"x":280,"y":960}}}},"infernape":{".":{".":{"regular":{"x":320,"y":960},"shiny":{"x":360,"y":960}}}},"piplup":{".":{".":{"regular":{"x":400,"y":960},"shiny":{"x":440,"y":960}}}},"prinplup":{".":{".":{"regular":{"x":480,"y":960},"shiny":{"x":520,"y":960}}}},"empoleon":{".":{".":{"regular":{"x":560,"y":960},"shiny":{"x":600,"y":960}}}},"starly":{".":{".":{"regular":{"x":640,"y":960},"shiny":{"x":680,"y":960}}}},"staravia":{".":{".":{"regular":{"x":720,"y":960},"shiny":{"x":760,"y":960}}}},"staraptor":{".":{".":{"regular":{"x":800,"y":960},"shiny":{"x":840,"y":960}}}},"bidoof":{".":{".":{"regular":{"x":880,"y":960},"shiny":{"x":920,"y":960}}}},"bibarel":{".":{".":{"regular":{"x":960,"y":960},"shiny":{"x":1000,"y":960}}}},"kricketot":{".":{".":{"regular":{"x":1040,"y":960},"shiny":{"x":1080,"y":960}}}},"kricketune":{".":{".":{"regular":{"x":1120,"y":960},"shiny":{"x":1160,"y":960}}}},"shinx":{".":{".":{"regular":{"x":1200,"y":960},"shiny":{"x":1240,"y":960}}}},"luxio":{".":{".":{"regular":{"x":0,"y":990},"shiny":{"x":40,"y":990}}}},"luxray":{".":{".":{"regular":{"x":80,"y":990},"shiny":{"x":120,"y":990}}}},"budew":{".":{".":{"regular":{"x":160,"y":990},"shiny":{"x":240,"y":990}},"right":{"regular":{"x":200,"y":990},"shiny":{"x":280,"y":990}}}},"roserade":{".":{".":{"regular":{"x":320,"y":990},"shiny":{"x":400,"y":990}},"right":{"regular":{"x":360,"y":990},"shiny":{"x":440,"y":990}}}},"cranidos":{".":{".":{"regular":{"x":480,"y":990},"shiny":{"x":520,"y":990}}}},"rampardos":{".":{".":{"regular":{"x":560,"y":990},"shiny":{"x":600,"y":990}}}},"shieldon":{".":{".":{"regular":{"x":640,"y":990},"shiny":{"x":680,"y":990}}}},"bastiodon":{".":{".":{"regular":{"x":720,"y":990},"shiny":{"x":760,"y":990}}}},"burmy":{".":{".":{"regular":{"x":800,"y":990},"shiny":{"x":840,"y":990}}},"plant":{".":{"regular":{"x":800,"y":990},"shiny":{"x":840,"y":990}}},"sandy":{".":{"regular":{"x":880,"y":990},"shiny":{"x":920,"y":990}}},"trash":{".":{"regular":{"x":960,"y":990},"shiny":{"x":1000,"y":990}}}},"wormadam":{".":{".":{"regular":{"x":1040,"y":990},"shiny":{"x":1080,"y":990}}},"plant":{".":{"regular":{"x":1040,"y":990},"shiny":{"x":1080,"y":990}}},"sandy":{".":{"regular":{"x":1120,"y":990},"shiny":{"x":1160,"y":990}}},"trash":{".":{"regular":{"x":1200,"y":990},"shiny":{"x":1240,"y":990}}}},"mothim":{".":{".":{"regular":{"x":0,"y":1020},"shiny":{"x":40,"y":1020}}}},"combee":{".":{".":{"regular":{"x":80,"y":1020},"shiny":{"x":120,"y":1020}}}},"vespiquen":{".":{".":{"regular":{"x":160,"y":1020},"shiny":{"x":200,"y":1020}}}},"pachirisu":{".":{".":{"regular":{"x":240,"y":1020},"shiny":{"x":280,"y":1020}}}},"buizel":{".":{".":{"regular":{"x":320,"y":1020},"shiny":{"x":360,"y":1020}}}},"floatzel":{".":{".":{"regular":{"x":400,"y":1020},"shiny":{"x":440,"y":1020}}}},"cherubi":{".":{".":{"regular":{"x":480,"y":1020},"shiny":{"x":520,"y":1020}}}},"cherrim":{".":{".":{"regular":{"x":560,"y":1020},"shiny":{"x":600,"y":1020}}},"overcast":{".":{"regular":{"x":560,"y":1020},"shiny":{"x":600,"y":1020}}},"sunshine":{".":{"regular":{"x":640,"y":1020},"shiny":{"x":680,"y":1020}}}},"shellos":{".":{".":{"regular":{"x":720,"y":1020},"shiny":{"x":760,"y":1020}}},"east":{".":{"regular":{"x":800,"y":1020},"shiny":{"x":840,"y":1020}}},"west":{".":{"regular":{"x":720,"y":1020},"shiny":{"x":760,"y":1020}}}},"gastrodon":{".":{".":{"regular":{"x":880,"y":1020},"shiny":{"x":920,"y":1020}}},"east":{".":{"regular":{"x":960,"y":1020},"shiny":{"x":1000,"y":1020}}},"west":{".":{"regular":{"x":880,"y":1020},"shiny":{"x":920,"y":1020}}}},"ambipom":{".":{".":{"regular":{"x":1040,"y":1020},"shiny":{"x":1080,"y":1020}}}},"drifloon":{".":{".":{"regular":{"x":1120,"y":1020},"shiny":{"x":1160,"y":1020}}}},"drifblim":{".":{".":{"regular":{"x":1200,"y":1020},"shiny":{"x":1240,"y":1020}}}},"buneary":{".":{".":{"regular":{"x":0,"y":1050},"shiny":{"x":40,"y":1050}}}},"lopunny":{".":{".":{"regular":{"x":80,"y":1050},"shiny":{"x":120,"y":1050}}},"mega":{".":{"regular":{"x":160,"y":1050},"shiny":{"x":200,"y":1050}}}},"mismagius":{".":{".":{"regular":{"x":240,"y":1050},"shiny":{"x":280,"y":1050}}}},"honchkrow":{".":{".":{"regular":{"x":320,"y":1050},"shiny":{"x":360,"y":1050}}}},"glameow":{".":{".":{"regular":{"x":400,"y":1050},"shiny":{"x":440,"y":1050}}}},"purugly":{".":{".":{"regular":{"x":480,"y":1050},"shiny":{"x":520,"y":1050}}}},"chingling":{".":{".":{"regular":{"x":560,"y":1050},"shiny":{"x":600,"y":1050}}}},"stunky":{".":{".":{"regular":{"x":640,"y":1050},"shiny":{"x":680,"y":1050}}}},"skuntank":{".":{".":{"regular":{"x":720,"y":1050},"shiny":{"x":760,"y":1050}}}},"bronzor":{".":{".":{"regular":{"x":800,"y":1050},"shiny":{"x":840,"y":1050}}}},"bronzong":{".":{".":{"regular":{"x":880,"y":1050},"shiny":{"x":920,"y":1050}}}},"bonsly":{".":{".":{"regular":{"x":960,"y":1050},"shiny":{"x":1000,"y":1050}}}},"mime-jr":{".":{".":{"regular":{"x":1040,"y":1050},"shiny":{"x":1080,"y":1050}}}},"happiny":{".":{".":{"regular":{"x":1120,"y":1050},"shiny":{"x":1160,"y":1050}}}},"chatot":{".":{".":{"regular":{"x":1200,"y":1050},"shiny":{"x":1240,"y":1050}}}},"spiritomb":{".":{".":{"regular":{"x":0,"y":1080},"shiny":{"x":40,"y":1080}}}},"gible":{".":{".":{"regular":{"x":80,"y":1080},"shiny":{"x":120,"y":1080}}}},"gabite":{".":{".":{"regular":{"x":160,"y":1080},"shiny":{"x":200,"y":1080}}}},"garchomp":{".":{".":{"regular":{"x":240,"y":1080},"shiny":{"x":280,"y":1080}}},"mega":{".":{"regular":{"x":320,"y":1080},"shiny":{"x":360,"y":1080}}}},"munchlax":{".":{".":{"regular":{"x":400,"y":1080},"shiny":{"x":440,"y":1080}}}},"riolu":{".":{".":{"regular":{"x":480,"y":1080},"shiny":{"x":520,"y":1080}}}},"lucario":{".":{".":{"regular":{"x":560,"y":1080},"shiny":{"x":600,"y":1080}}},"mega":{".":{"regular":{"x":640,"y":1080},"shiny":{"x":680,"y":1080}}}},"hippopotas":{".":{".":{"regular":{"x":720,"y":1080},"shiny":{"x":760,"y":1080}}}},"hippowdon":{".":{".":{"regular":{"x":800,"y":1080},"shiny":{"x":840,"y":1080}}}},"skorupi":{".":{".":{"regular":{"x":880,"y":1080},"shiny":{"x":920,"y":1080}}}},"drapion":{".":{".":{"regular":{"x":960,"y":1080},"shiny":{"x":1000,"y":1080}}}},"croagunk":{".":{".":{"regular":{"x":1040,"y":1080},"shiny":{"x":1080,"y":1080}}}},"toxicroak":{".":{".":{"regular":{"x":1120,"y":1080},"shiny":{"x":1160,"y":1080}}}},"carnivine":{".":{".":{"regular":{"x":1200,"y":1080},"shiny":{"x":1240,"y":1080}}}},"finneon":{".":{".":{"regular":{"x":0,"y":1110},"shiny":{"x":40,"y":1110}}}},"lumineon":{".":{".":{"regular":{"x":80,"y":1110},"shiny":{"x":120,"y":1110}}}},"mantyke":{".":{".":{"regular":{"x":160,"y":1110},"shiny":{"x":200,"y":1110}}}},"snover":{".":{".":{"regular":{"x":240,"y":1110},"shiny":{"x":280,"y":1110}}}},"abomasnow":{".":{".":{"regular":{"x":320,"y":1110},"shiny":{"x":360,"y":1110}}},"mega":{".":{"regular":{"x":400,"y":1110},"shiny":{"x":440,"y":1110}}}},"weavile":{".":{".":{"regular":{"x":480,"y":1110},"shiny":{"x":520,"y":1110}}}},"magnezone":{".":{".":{"regular":{"x":560,"y":1110},"shiny":{"x":600,"y":1110}}}},"lickilicky":{".":{".":{"regular":{"x":640,"y":1110},"shiny":{"x":680,"y":1110}}}},"rhyperior":{".":{".":{"regular":{"x":720,"y":1110},"shiny":{"x":760,"y":1110}}}},"tangrowth":{".":{".":{"regular":{"x":800,"y":1110},"shiny":{"x":840,"y":1110}}}},"electivire":{".":{".":{"regular":{"x":880,"y":1110},"shiny":{"x":920,"y":1110}}}},"magmortar":{".":{".":{"regular":{"x":960,"y":1110},"shiny":{"x":1040,"y":1110}},"right":{"regular":{"x":1000,"y":1110},"shiny":{"x":1080,"y":1110}}}},"togekiss":{".":{".":{"regular":{"x":1120,"y":1110},"shiny":{"x":1200,"y":1110}},"right":{"regular":{"x":1160,"y":1110},"shiny":{"x":1240,"y":1110}}}},"yanmega":{".":{".":{"regular":{"x":0,"y":1140},"shiny":{"x":40,"y":1140}}}},"leafeon":{".":{".":{"regular":{"x":80,"y":1140},"shiny":{"x":120,"y":1140}}}},"glaceon":{".":{".":{"regular":{"x":160,"y":1140},"shiny":{"x":200,"y":1140}}}},"gliscor":{".":{".":{"regular":{"x":240,"y":1140},"shiny":{"x":280,"y":1140}}}},"mamoswine":{".":{".":{"regular":{"x":320,"y":1140},"shiny":{"x":360,"y":1140}}}},"porygon-z":{".":{".":{"regular":{"x":400,"y":1140},"shiny":{"x":440,"y":1140}}}},"gallade":{".":{".":{"regular":{"x":480,"y":1140},"shiny":{"x":520,"y":1140}}},"mega":{".":{"regular":{"x":560,"y":1140},"shiny":{"x":600,"y":1140}}}},"probopass":{".":{".":{"regular":{"x":640,"y":1140},"shiny":{"x":680,"y":1140}}}},"dusknoir":{".":{".":{"regular":{"x":720,"y":1140},"shiny":{"x":760,"y":1140}}}},"froslass":{".":{".":{"regular":{"x":800,"y":1140},"shiny":{"x":840,"y":1140}}}},"rotom":{".":{".":{"regular":{"x":880,"y":1140},"shiny":{"x":920,"y":1140}}},"fan":{".":{"regular":{"x":960,"y":1140},"shiny":{"x":1000,"y":1140}}},"frost":{".":{"regular":{"x":1040,"y":1140},"shiny":{"x":1080,"y":1140}}},"heat":{".":{"regular":{"x":1120,"y":1140},"shiny":{"x":1160,"y":1140}}},"mow":{".":{"regular":{"x":1200,"y":1140},"shiny":{"x":1240,"y":1140}}},"wash":{".":{"regular":{"x":0,"y":1170},"shiny":{"x":80,"y":1170}},"right":{"regular":{"x":40,"y":1170},"shiny":{"x":120,"y":1170}}}},"uxie":{".":{".":{"regular":{"x":160,"y":1170},"shiny":{"x":200,"y":1170}}}},"mesprit":{".":{".":{"regular":{"x":240,"y":1170},"shiny":{"x":280,"y":1170}}}},"azelf":{".":{".":{"regular":{"x":320,"y":1170},"shiny":{"x":360,"y":1170}}}},"dialga":{".":{".":{"regular":{"x":400,"y":1170},"shiny":{"x":440,"y":1170}}}},"palkia":{".":{".":{"regular":{"x":480,"y":1170},"shiny":{"x":520,"y":1170}}}},"heatran":{".":{".":{"regular":{"x":560,"y":1170},"shiny":{"x":600,"y":1170}}}},"regigigas":{".":{".":{"regular":{"x":640,"y":1170},"shiny":{"x":680,"y":1170}}}},"giratina":{".":{".":{"regular":{"x":720,"y":1170},"shiny":{"x":760,"y":1170}}},"altered":{".":{"regular":{"x":720,"y":1170},"shiny":{"x":760,"y":1170}}},"origin":{".":{"regular":{"x":800,"y":1170},"shiny":{"x":840,"y":1170}}}},"cresselia":{".":{".":{"regular":{"x":880,"y":1170},"shiny":{"x":920,"y":1170}}}},"phione":{".":{".":{"regular":{"x":960,"y":1170},"shiny":{"x":1000,"y":1170}}}},"manaphy":{".":{".":{"regular":{"x":1040,"y":1170},"shiny":{"x":1080,"y":1170}}}},"darkrai":{".":{".":{"regular":{"x":1120,"y":1170},"shiny":{"x":1160,"y":1170}}}},"shaymin":{".":{".":{"regular":{"x":1200,"y":1170},"shiny":{"x":1240,"y":1170}}},"land":{".":{"regular":{"x":1200,"y":1170},"shiny":{"x":1240,"y":1170}}},"sky":{".":{"regular":{"x":0,"y":1200},"shiny":{"x":80,"y":1200}},"right":{"regular":{"x":40,"y":1200},"shiny":{"x":120,"y":1200}}}},"arceus":{".":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"bug":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"dark":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"dragon":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"electric":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"fairy":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"fighting":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"fire":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"flying":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"ghost":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"grass":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"ground":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"ice":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"normal":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"poison":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"psychic":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"rock":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"steel":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}},"water":{".":{"regular":{"x":160,"y":1200},"shiny":{"x":200,"y":1200}}}},"victini":{".":{".":{"regular":{"x":240,"y":1200},"shiny":{"x":280,"y":1200}}}},"snivy":{".":{".":{"regular":{"x":320,"y":1200},"shiny":{"x":360,"y":1200}}}},"servine":{".":{".":{"regular":{"x":400,"y":1200},"shiny":{"x":440,"y":1200}}}},"serperior":{".":{".":{"regular":{"x":480,"y":1200},"shiny":{"x":520,"y":1200}}}},"tepig":{".":{".":{"regular":{"x":560,"y":1200},"shiny":{"x":600,"y":1200}}}},"pignite":{".":{".":{"regular":{"x":640,"y":1200},"shiny":{"x":680,"y":1200}}}},"emboar":{".":{".":{"regular":{"x":720,"y":1200},"shiny":{"x":800,"y":1200}},"right":{"regular":{"x":760,"y":1200},"shiny":{"x":840,"y":1200}}}},"oshawott":{".":{".":{"regular":{"x":880,"y":1200},"shiny":{"x":920,"y":1200}}}},"dewott":{".":{".":{"regular":{"x":960,"y":1200},"shiny":{"x":1000,"y":1200}}}},"samurott":{".":{".":{"regular":{"x":1040,"y":1200},"shiny":{"x":1080,"y":1200}}}},"patrat":{".":{".":{"regular":{"x":1120,"y":1200},"shiny":{"x":1160,"y":1200}}}},"watchog":{".":{".":{"regular":{"x":1200,"y":1200},"shiny":{"x":1240,"y":1200}}}},"lillipup":{".":{".":{"regular":{"x":0,"y":1230},"shiny":{"x":40,"y":1230}}}},"herdier":{".":{".":{"regular":{"x":80,"y":1230},"shiny":{"x":120,"y":1230}}}},"stoutland":{".":{".":{"regular":{"x":160,"y":1230},"shiny":{"x":200,"y":1230}}}},"purrloin":{".":{".":{"regular":{"x":240,"y":1230},"shiny":{"x":280,"y":1230}}}},"liepard":{".":{".":{"regular":{"x":320,"y":1230},"shiny":{"x":360,"y":1230}}}},"pansage":{".":{".":{"regular":{"x":400,"y":1230},"shiny":{"x":440,"y":1230}}}},"simisage":{".":{".":{"regular":{"x":480,"y":1230},"shiny":{"x":520,"y":1230}}}},"pansear":{".":{".":{"regular":{"x":560,"y":1230},"shiny":{"x":640,"y":1230}},"right":{"regular":{"x":600,"y":1230},"shiny":{"x":680,"y":1230}}}},"simisear":{".":{".":{"regular":{"x":720,"y":1230},"shiny":{"x":800,"y":1230}},"right":{"regular":{"x":760,"y":1230},"shiny":{"x":840,"y":1230}}}},"panpour":{".":{".":{"regular":{"x":880,"y":1230},"shiny":{"x":920,"y":1230}}}},"simipour":{".":{".":{"regular":{"x":960,"y":1230},"shiny":{"x":1000,"y":1230}}}},"munna":{".":{".":{"regular":{"x":1040,"y":1230},"shiny":{"x":1080,"y":1230}}}},"musharna":{".":{".":{"regular":{"x":1120,"y":1230},"shiny":{"x":1160,"y":1230}}}},"pidove":{".":{".":{"regular":{"x":1200,"y":1230},"shiny":{"x":1240,"y":1230}}}},"tranquill":{".":{".":{"regular":{"x":0,"y":1260},"shiny":{"x":40,"y":1260}}}},"unfezant":{".":{".":{"regular":{"x":80,"y":1260},"shiny":{"x":160,"y":1260}},"female":{"regular":{"x":120,"y":1260},"shiny":{"x":200,"y":1260}}}},"blitzle":{".":{".":{"regular":{"x":240,"y":1260},"shiny":{"x":280,"y":1260}}}},"zebstrika":{".":{".":{"regular":{"x":320,"y":1260},"shiny":{"x":360,"y":1260}}}},"roggenrola":{".":{".":{"regular":{"x":400,"y":1260},"shiny":{"x":440,"y":1260}}}},"boldore":{".":{".":{"regular":{"x":480,"y":1260},"shiny":{"x":520,"y":1260}}}},"gigalith":{".":{".":{"regular":{"x":560,"y":1260},"shiny":{"x":600,"y":1260}}}},"woobat":{".":{".":{"regular":{"x":640,"y":1260},"shiny":{"x":680,"y":1260}}}},"swoobat":{".":{".":{"regular":{"x":720,"y":1260},"shiny":{"x":760,"y":1260}}}},"drilbur":{".":{".":{"regular":{"x":800,"y":1260},"shiny":{"x":880,"y":1260}},"right":{"regular":{"x":840,"y":1260},"shiny":{"x":920,"y":1260}}}},"excadrill":{".":{".":{"regular":{"x":960,"y":1260},"shiny":{"x":1040,"y":1260}},"right":{"regular":{"x":1000,"y":1260},"shiny":{"x":1080,"y":1260}}}},"audino":{".":{".":{"regular":{"x":1120,"y":1260},"shiny":{"x":1160,"y":1260}}},"mega":{".":{"regular":{"x":1200,"y":1260},"shiny":{"x":1240,"y":1260}}}},"timburr":{".":{".":{"regular":{"x":0,"y":1290},"shiny":{"x":40,"y":1290}}}},"gurdurr":{".":{".":{"regular":{"x":80,"y":1290},"shiny":{"x":120,"y":1290}}}},"conkeldurr":{".":{".":{"regular":{"x":160,"y":1290},"shiny":{"x":200,"y":1290}}}},"tympole":{".":{".":{"regular":{"x":240,"y":1290},"shiny":{"x":280,"y":1290}}}},"palpitoad":{".":{".":{"regular":{"x":320,"y":1290},"shiny":{"x":360,"y":1290}}}},"seismitoad":{".":{".":{"regular":{"x":400,"y":1290},"shiny":{"x":440,"y":1290}}}},"throh":{".":{".":{"regular":{"x":480,"y":1290},"shiny":{"x":520,"y":1290}}}},"sawk":{".":{".":{"regular":{"x":560,"y":1290},"shiny":{"x":640,"y":1290}},"right":{"regular":{"x":600,"y":1290},"shiny":{"x":680,"y":1290}}}},"sewaddle":{".":{".":{"regular":{"x":720,"y":1290},"shiny":{"x":760,"y":1290}}}},"swadloon":{".":{".":{"regular":{"x":800,"y":1290},"shiny":{"x":840,"y":1290}}}},"leavanny":{".":{".":{"regular":{"x":880,"y":1290},"shiny":{"x":920,"y":1290}}}},"venipede":{".":{".":{"regular":{"x":960,"y":1290},"shiny":{"x":1000,"y":1290}}}},"whirlipede":{".":{".":{"regular":{"x":1040,"y":1290},"shiny":{"x":1080,"y":1290}}}},"scolipede":{".":{".":{"regular":{"x":1120,"y":1290},"shiny":{"x":1160,"y":1290}}}},"cottonee":{".":{".":{"regular":{"x":1200,"y":1290},"shiny":{"x":1240,"y":1290}}}},"whimsicott":{".":{".":{"regular":{"x":0,"y":1320},"shiny":{"x":40,"y":1320}}}},"petilil":{".":{".":{"regular":{"x":80,"y":1320},"shiny":{"x":120,"y":1320}}}},"lilligant":{".":{".":{"regular":{"x":160,"y":1320},"shiny":{"x":240,"y":1320}},"right":{"regular":{"x":200,"y":1320},"shiny":{"x":280,"y":1320}}}},"basculin":{".":{".":{"regular":{"x":320,"y":1320},"shiny":{"x":360,"y":1320}}},"blue-striped":{".":{"regular":{"x":400,"y":1320},"shiny":{"x":440,"y":1320}}},"red-striped":{".":{"regular":{"x":320,"y":1320},"shiny":{"x":360,"y":1320}}}},"sandile":{".":{".":{"regular":{"x":480,"y":1320},"shiny":{"x":520,"y":1320}}}},"krokorok":{".":{".":{"regular":{"x":560,"y":1320},"shiny":{"x":600,"y":1320}}}},"krookodile":{".":{".":{"regular":{"x":640,"y":1320},"shiny":{"x":680,"y":1320}}}},"darumaka":{".":{".":{"regular":{"x":720,"y":1320},"shiny":{"x":760,"y":1320}}}},"darmanitan":{".":{".":{"regular":{"x":800,"y":1320},"shiny":{"x":840,"y":1320}}},"standard":{".":{"regular":{"x":800,"y":1320},"shiny":{"x":840,"y":1320}}},"zen":{".":{"regular":{"x":880,"y":1320},"shiny":{"x":920,"y":1320}}}},"maractus":{".":{".":{"regular":{"x":960,"y":1320},"shiny":{"x":1000,"y":1320}}}},"dwebble":{".":{".":{"regular":{"x":1040,"y":1320},"shiny":{"x":1080,"y":1320}}}},"crustle":{".":{".":{"regular":{"x":1120,"y":1320},"shiny":{"x":1160,"y":1320}}}},"scraggy":{".":{".":{"regular":{"x":1200,"y":1320},"shiny":{"x":1240,"y":1320}}}},"scrafty":{".":{".":{"regular":{"x":0,"y":1350},"shiny":{"x":40,"y":1350}}}},"sigilyph":{".":{".":{"regular":{"x":80,"y":1350},"shiny":{"x":120,"y":1350}}}},"yamask":{".":{".":{"regular":{"x":160,"y":1350},"shiny":{"x":200,"y":1350}}}},"cofagrigus":{".":{".":{"regular":{"x":240,"y":1350},"shiny":{"x":280,"y":1350}}}},"tirtouga":{".":{".":{"regular":{"x":320,"y":1350},"shiny":{"x":360,"y":1350}}}},"carracosta":{".":{".":{"regular":{"x":400,"y":1350},"shiny":{"x":440,"y":1350}}}},"archen":{".":{".":{"regular":{"x":480,"y":1350},"shiny":{"x":520,"y":1350}}}},"archeops":{".":{".":{"regular":{"x":560,"y":1350},"shiny":{"x":600,"y":1350}}}},"trubbish":{".":{".":{"regular":{"x":640,"y":1350},"shiny":{"x":680,"y":1350}}}},"garbodor":{".":{".":{"regular":{"x":720,"y":1350},"shiny":{"x":800,"y":1350}},"right":{"regular":{"x":760,"y":1350},"shiny":{"x":840,"y":1350}}}},"zorua":{".":{".":{"regular":{"x":880,"y":1350},"shiny":{"x":920,"y":1350}}}},"zoroark":{".":{".":{"regular":{"x":960,"y":1350},"shiny":{"x":1000,"y":1350}}}},"minccino":{".":{".":{"regular":{"x":1040,"y":1350},"shiny":{"x":1080,"y":1350}}}},"cinccino":{".":{".":{"regular":{"x":1120,"y":1350},"shiny":{"x":1160,"y":1350}}}},"gothita":{".":{".":{"regular":{"x":1200,"y":1350},"shiny":{"x":1240,"y":1350}}}},"gothorita":{".":{".":{"regular":{"x":0,"y":1380},"shiny":{"x":40,"y":1380}}}},"gothitelle":{".":{".":{"regular":{"x":80,"y":1380},"shiny":{"x":120,"y":1380}}}},"solosis":{".":{".":{"regular":{"x":160,"y":1380},"shiny":{"x":240,"y":1380}},"right":{"regular":{"x":200,"y":1380},"shiny":{"x":280,"y":1380}}}},"duosion":{".":{".":{"regular":{"x":320,"y":1380},"shiny":{"x":360,"y":1380}}}},"reuniclus":{".":{".":{"regular":{"x":400,"y":1380},"shiny":{"x":440,"y":1380}}}},"ducklett":{".":{".":{"regular":{"x":480,"y":1380},"shiny":{"x":520,"y":1380}}}},"swanna":{".":{".":{"regular":{"x":560,"y":1380},"shiny":{"x":600,"y":1380}}}},"vanillite":{".":{".":{"regular":{"x":640,"y":1380},"shiny":{"x":680,"y":1380}}}},"vanillish":{".":{".":{"regular":{"x":720,"y":1380},"shiny":{"x":760,"y":1380}}}},"vanilluxe":{".":{".":{"regular":{"x":800,"y":1380},"shiny":{"x":880,"y":1380}},"right":{"regular":{"x":840,"y":1380},"shiny":{"x":920,"y":1380}}}},"deerling":{".":{".":{"regular":{"x":960,"y":1380},"shiny":{"x":1000,"y":1380}}},"autumn":{".":{"regular":{"x":1040,"y":1380},"shiny":{"x":1080,"y":1380}}},"spring":{".":{"regular":{"x":960,"y":1380},"shiny":{"x":1000,"y":1380}}},"summer":{".":{"regular":{"x":1120,"y":1380},"shiny":{"x":1160,"y":1380}}},"winter":{".":{"regular":{"x":1200,"y":1380},"shiny":{"x":1240,"y":1380}}}},"sawsbuck":{".":{".":{"regular":{"x":0,"y":1410},"shiny":{"x":40,"y":1410}}},"autumn":{".":{"regular":{"x":80,"y":1410},"shiny":{"x":120,"y":1410}}},"spring":{".":{"regular":{"x":0,"y":1410},"shiny":{"x":40,"y":1410}}},"summer":{".":{"regular":{"x":160,"y":1410},"shiny":{"x":200,"y":1410}}},"winter":{".":{"regular":{"x":240,"y":1410},"shiny":{"x":280,"y":1410}}}},"emolga":{".":{".":{"regular":{"x":320,"y":1410},"shiny":{"x":360,"y":1410}}}},"karrablast":{".":{".":{"regular":{"x":400,"y":1410},"shiny":{"x":440,"y":1410}}}},"escavalier":{".":{".":{"regular":{"x":480,"y":1410},"shiny":{"x":520,"y":1410}}}},"foongus":{".":{".":{"regular":{"x":560,"y":1410},"shiny":{"x":600,"y":1410}}}},"amoonguss":{".":{".":{"regular":{"x":640,"y":1410},"shiny":{"x":720,"y":1410}},"right":{"regular":{"x":680,"y":1410},"shiny":{"x":760,"y":1410}}}},"frillish":{".":{".":{"regular":{"x":800,"y":1410},"shiny":{"x":880,"y":1410}},"female":{"regular":{"x":840,"y":1410},"shiny":{"x":920,"y":1410}}}},"jellicent":{".":{".":{"regular":{"x":960,"y":1410},"shiny":{"x":1040,"y":1410}},"female":{"regular":{"x":1000,"y":1410},"shiny":{"x":1080,"y":1410}}}},"alomomola":{".":{".":{"regular":{"x":1120,"y":1410},"shiny":{"x":1160,"y":1410}}}},"joltik":{".":{".":{"regular":{"x":1200,"y":1410},"shiny":{"x":1240,"y":1410}}}},"galvantula":{".":{".":{"regular":{"x":0,"y":1440},"shiny":{"x":40,"y":1440}}}},"ferroseed":{".":{".":{"regular":{"x":80,"y":1440},"shiny":{"x":120,"y":1440}}}},"ferrothorn":{".":{".":{"regular":{"x":160,"y":1440},"shiny":{"x":200,"y":1440}}}},"klink":{".":{".":{"regular":{"x":240,"y":1440},"shiny":{"x":320,"y":1440}},"right":{"regular":{"x":280,"y":1440},"shiny":{"x":360,"y":1440}}}},"klang":{".":{".":{"regular":{"x":400,"y":1440},"shiny":{"x":480,"y":1440}},"right":{"regular":{"x":440,"y":1440},"shiny":{"x":520,"y":1440}}}},"klinklang":{".":{".":{"regular":{"x":560,"y":1440},"shiny":{"x":640,"y":1440}},"right":{"regular":{"x":600,"y":1440},"shiny":{"x":680,"y":1440}}}},"tynamo":{".":{".":{"regular":{"x":720,"y":1440},"shiny":{"x":760,"y":1440}}}},"eelektrik":{".":{".":{"regular":{"x":800,"y":1440},"shiny":{"x":840,"y":1440}}}},"eelektross":{".":{".":{"regular":{"x":880,"y":1440},"shiny":{"x":920,"y":1440}}}},"elgyem":{".":{".":{"regular":{"x":960,"y":1440},"shiny":{"x":1000,"y":1440}}}},"beheeyem":{".":{".":{"regular":{"x":1040,"y":1440},"shiny":{"x":1080,"y":1440}}}},"litwick":{".":{".":{"regular":{"x":1120,"y":1440},"shiny":{"x":1200,"y":1440}},"right":{"regular":{"x":1160,"y":1440},"shiny":{"x":1240,"y":1440}}}},"lampent":{".":{".":{"regular":{"x":0,"y":1470},"shiny":{"x":40,"y":1470}}}},"chandelure":{".":{".":{"regular":{"x":80,"y":1470},"shiny":{"x":120,"y":1470}}}},"axew":{".":{".":{"regular":{"x":160,"y":1470},"shiny":{"x":200,"y":1470}}}},"fraxure":{".":{".":{"regular":{"x":240,"y":1470},"shiny":{"x":280,"y":1470}}}},"haxorus":{".":{".":{"regular":{"x":320,"y":1470},"shiny":{"x":360,"y":1470}}}},"cubchoo":{".":{".":{"regular":{"x":400,"y":1470},"shiny":{"x":440,"y":1470}}}},"beartic":{".":{".":{"regular":{"x":480,"y":1470},"shiny":{"x":520,"y":1470}}}},"cryogonal":{".":{".":{"regular":{"x":560,"y":1470},"shiny":{"x":600,"y":1470}}}},"shelmet":{".":{".":{"regular":{"x":640,"y":1470},"shiny":{"x":680,"y":1470}}}},"accelgor":{".":{".":{"regular":{"x":720,"y":1470},"shiny":{"x":760,"y":1470}}}},"stunfisk":{".":{".":{"regular":{"x":800,"y":1470},"shiny":{"x":840,"y":1470}}}},"mienfoo":{".":{".":{"regular":{"x":880,"y":1470},"shiny":{"x":920,"y":1470}}}},"mienshao":{".":{".":{"regular":{"x":960,"y":1470},"shiny":{"x":1000,"y":1470}}}},"druddigon":{".":{".":{"regular":{"x":1040,"y":1470},"shiny":{"x":1080,"y":1470}}}},"golett":{".":{".":{"regular":{"x":1120,"y":1470},"shiny":{"x":1200,"y":1470}},"right":{"regular":{"x":1160,"y":1470},"shiny":{"x":1240,"y":1470}}}},"golurk":{".":{".":{"regular":{"x":0,"y":1500},"shiny":{"x":80,"y":1500}},"right":{"regular":{"x":40,"y":1500},"shiny":{"x":120,"y":1500}}}},"pawniard":{".":{".":{"regular":{"x":160,"y":1500},"shiny":{"x":200,"y":1500}}}},"bisharp":{".":{".":{"regular":{"x":240,"y":1500},"shiny":{"x":280,"y":1500}}}},"bouffalant":{".":{".":{"regular":{"x":320,"y":1500},"shiny":{"x":360,"y":1500}}}},"rufflet":{".":{".":{"regular":{"x":400,"y":1500},"shiny":{"x":440,"y":1500}}}},"braviary":{".":{".":{"regular":{"x":480,"y":1500},"shiny":{"x":520,"y":1500}}}},"vullaby":{".":{".":{"regular":{"x":560,"y":1500},"shiny":{"x":600,"y":1500}}}},"mandibuzz":{".":{".":{"regular":{"x":640,"y":1500},"shiny":{"x":680,"y":1500}}}},"heatmor":{".":{".":{"regular":{"x":720,"y":1500},"shiny":{"x":760,"y":1500}}}},"durant":{".":{".":{"regular":{"x":800,"y":1500},"shiny":{"x":840,"y":1500}}}},"deino":{".":{".":{"regular":{"x":880,"y":1500},"shiny":{"x":920,"y":1500}}}},"zweilous":{".":{".":{"regular":{"x":960,"y":1500},"shiny":{"x":1000,"y":1500}}}},"hydreigon":{".":{".":{"regular":{"x":1040,"y":1500},"shiny":{"x":1080,"y":1500}}}},"larvesta":{".":{".":{"regular":{"x":1120,"y":1500},"shiny":{"x":1160,"y":1500}}}},"volcarona":{".":{".":{"regular":{"x":1200,"y":1500},"shiny":{"x":1240,"y":1500}}}},"cobalion":{".":{".":{"regular":{"x":0,"y":1530},"shiny":{"x":40,"y":1530}}}},"terrakion":{".":{".":{"regular":{"x":80,"y":1530},"shiny":{"x":120,"y":1530}}}},"virizion":{".":{".":{"regular":{"x":160,"y":1530},"shiny":{"x":200,"y":1530}}}},"tornadus":{".":{".":{"regular":{"x":240,"y":1530},"shiny":{"x":280,"y":1530}}},"incarnate":{".":{"regular":{"x":240,"y":1530},"shiny":{"x":280,"y":1530}}},"therian":{".":{"regular":{"x":320,"y":1530},"shiny":{"x":360,"y":1530}}}},"thundurus":{".":{".":{"regular":{"x":400,"y":1530},"shiny":{"x":440,"y":1530}}},"incarnate":{".":{"regular":{"x":400,"y":1530},"shiny":{"x":440,"y":1530}}},"therian":{".":{"regular":{"x":480,"y":1530},"shiny":{"x":520,"y":1530}}}},"reshiram":{".":{".":{"regular":{"x":560,"y":1530},"shiny":{"x":600,"y":1530}}}},"zekrom":{".":{".":{"regular":{"x":640,"y":1530},"shiny":{"x":680,"y":1530}}}},"landorus":{".":{".":{"regular":{"x":720,"y":1530},"shiny":{"x":760,"y":1530}}},"incarnate":{".":{"regular":{"x":720,"y":1530},"shiny":{"x":760,"y":1530}}},"therian":{".":{"regular":{"x":800,"y":1530},"shiny":{"x":840,"y":1530}}}},"kyurem":{".":{".":{"regular":{"x":880,"y":1530},"shiny":{"x":960,"y":1530}},"right":{"regular":{"x":920,"y":1530},"shiny":{"x":1000,"y":1530}}},"black":{".":{"regular":{"x":1040,"y":1530},"shiny":{"x":1120,"y":1530}},"right":{"regular":{"x":1080,"y":1530},"shiny":{"x":1160,"y":1530}}},"white":{".":{"regular":{"x":1200,"y":1530},"shiny":{"x":0,"y":1560}},"right":{"regular":{"x":1240,"y":1530},"shiny":{"x":40,"y":1560}}}},"keldeo":{".":{".":{"regular":{"x":80,"y":1560},"shiny":{"x":120,"y":1560}}},"ordinary":{".":{"regular":{"x":80,"y":1560},"shiny":{"x":120,"y":1560}}},"resolute":{".":{"regular":{"x":160,"y":1560},"shiny":{"x":240,"y":1560}},"right":{"regular":{"x":200,"y":1560},"shiny":{"x":280,"y":1560}}}},"meloetta":{".":{".":{"regular":{"x":320,"y":1560},"shiny":{"x":400,"y":1560}},"right":{"regular":{"x":360,"y":1560},"shiny":{"x":440,"y":1560}}},"aria":{".":{"regular":{"x":320,"y":1560},"shiny":{"x":400,"y":1560}},"right":{"regular":{"x":320,"y":1560},"shiny":{"x":400,"y":1560}}},"pirouette":{".":{"regular":{"x":480,"y":1560},"shiny":{"x":520,"y":1560}}}},"genesect":{".":{".":{"regular":{"x":560,"y":1560},"shiny":{"x":600,"y":1560}}},"burn":{".":{"regular":{"x":560,"y":1560},"shiny":{"x":600,"y":1560}}},"chill":{".":{"regular":{"x":560,"y":1560},"shiny":{"x":600,"y":1560}}},"douse":{".":{"regular":{"x":560,"y":1560},"shiny":{"x":600,"y":1560}}},"shock":{".":{"regular":{"x":560,"y":1560},"shiny":{"x":600,"y":1560}}}},"chespin":{".":{".":{"regular":{"x":640,"y":1560},"shiny":{"x":680,"y":1560}}}},"quilladin":{".":{".":{"regular":{"x":720,"y":1560},"shiny":{"x":760,"y":1560}}}},"chesnaught":{".":{".":{"regular":{"x":800,"y":1560},"shiny":{"x":840,"y":1560}}}},"fennekin":{".":{".":{"regular":{"x":880,"y":1560},"shiny":{"x":920,"y":1560}}}},"braixen":{".":{".":{"regular":{"x":960,"y":1560},"shiny":{"x":1000,"y":1560}}}},"delphox":{".":{".":{"regular":{"x":1040,"y":1560},"shiny":{"x":1080,"y":1560}}}},"froakie":{".":{".":{"regular":{"x":1120,"y":1560},"shiny":{"x":1160,"y":1560}}}},"frogadier":{".":{".":{"regular":{"x":1200,"y":1560},"shiny":{"x":1240,"y":1560}}}},"greninja":{".":{".":{"regular":{"x":0,"y":1590},"shiny":{"x":80,"y":1590}},"right":{"regular":{"x":40,"y":1590},"shiny":{"x":120,"y":1590}}}},"bunnelby":{".":{".":{"regular":{"x":160,"y":1590},"shiny":{"x":200,"y":1590}}}},"diggersby":{".":{".":{"regular":{"x":240,"y":1590},"shiny":{"x":280,"y":1590}}}},"fletchling":{".":{".":{"regular":{"x":320,"y":1590},"shiny":{"x":360,"y":1590}}}},"fletchinder":{".":{".":{"regular":{"x":400,"y":1590},"shiny":{"x":440,"y":1590}}}},"talonflame":{".":{".":{"regular":{"x":480,"y":1590},"shiny":{"x":520,"y":1590}}}},"scatterbug":{".":{".":{"regular":{"x":560,"y":1590},"shiny":{"x":600,"y":1590}}}},"spewpa":{".":{".":{"regular":{"x":640,"y":1590},"shiny":{"x":680,"y":1590}}}},"vivillon":{".":{".":{"regular":{"x":720,"y":1590},"shiny":{"x":760,"y":1590}}},"archipelago":{".":{"regular":{"x":800,"y":1590},"shiny":{"x":840,"y":1590}}},"continental":{".":{"regular":{"x":880,"y":1590},"shiny":{"x":920,"y":1590}}},"elegant":{".":{"regular":{"x":960,"y":1590},"shiny":{"x":1000,"y":1590}}},"fancy":{".":{"regular":{"x":1040,"y":1590},"shiny":{"x":1080,"y":1590}}},"garden":{".":{"regular":{"x":1120,"y":1590},"shiny":{"x":1160,"y":1590}}},"high-plains":{".":{"regular":{"x":1200,"y":1590},"shiny":{"x":1240,"y":1590}}},"icy-snow":{".":{"regular":{"x":0,"y":1620},"shiny":{"x":40,"y":1620}}},"jungle":{".":{"regular":{"x":80,"y":1620},"shiny":{"x":120,"y":1620}}},"marine":{".":{"regular":{"x":160,"y":1620},"shiny":{"x":200,"y":1620}}},"meadow":{".":{"regular":{"x":720,"y":1590},"shiny":{"x":760,"y":1590}}},"modern":{".":{"regular":{"x":240,"y":1620},"shiny":{"x":280,"y":1620}}},"monsoon":{".":{"regular":{"x":320,"y":1620},"shiny":{"x":360,"y":1620}}},"ocean":{".":{"regular":{"x":400,"y":1620},"shiny":{"x":440,"y":1620}}},"poke-ball":{".":{"regular":{"x":480,"y":1620},"shiny":{"x":520,"y":1620}}},"polar":{".":{"regular":{"x":560,"y":1620},"shiny":{"x":600,"y":1620}}},"river":{".":{"regular":{"x":640,"y":1620},"shiny":{"x":680,"y":1620}}},"sandstorm":{".":{"regular":{"x":720,"y":1620},"shiny":{"x":760,"y":1620}}},"savanna":{".":{"regular":{"x":800,"y":1620},"shiny":{"x":840,"y":1620}}},"sun":{".":{"regular":{"x":880,"y":1620},"shiny":{"x":920,"y":1620}}},"tundra":{".":{"regular":{"x":960,"y":1620},"shiny":{"x":1000,"y":1620}}}},"litleo":{".":{".":{"regular":{"x":1040,"y":1620},"shiny":{"x":1080,"y":1620}}}},"pyroar":{".":{".":{"regular":{"x":1120,"y":1620},"shiny":{"x":1200,"y":1620}},"female":{"regular":{"x":1160,"y":1620},"shiny":{"x":1240,"y":1620}}}},"flabebe":{".":{".":{"regular":{"x":0,"y":1650},"shiny":{"x":40,"y":1650}}},"blue":{".":{"regular":{"x":80,"y":1650},"shiny":{"x":120,"y":1650}}},"orange":{".":{"regular":{"x":160,"y":1650},"shiny":{"x":200,"y":1650}}},"red":{".":{"regular":{"x":0,"y":1650},"shiny":{"x":40,"y":1650}}},"white":{".":{"regular":{"x":240,"y":1650},"shiny":{"x":280,"y":1650}}},"yellow":{".":{"regular":{"x":320,"y":1650},"shiny":{"x":360,"y":1650}}}},"floette":{".":{".":{"regular":{"x":400,"y":1650},"shiny":{"x":440,"y":1650}}},"blue":{".":{"regular":{"x":480,"y":1650},"shiny":{"x":520,"y":1650}}},"eternal":{".":{"regular":{"x":560,"y":1650},"shiny":{"x":600,"y":1650}}},"orange":{".":{"regular":{"x":640,"y":1650},"shiny":{"x":680,"y":1650}}},"red":{".":{"regular":{"x":400,"y":1650},"shiny":{"x":440,"y":1650}}},"white":{".":{"regular":{"x":720,"y":1650},"shiny":{"x":760,"y":1650}}},"yellow":{".":{"regular":{"x":800,"y":1650},"shiny":{"x":840,"y":1650}}}},"florges":{".":{".":{"regular":{"x":880,"y":1650},"shiny":{"x":920,"y":1650}}},"blue":{".":{"regular":{"x":960,"y":1650},"shiny":{"x":1000,"y":1650}}},"orange":{".":{"regular":{"x":1040,"y":1650},"shiny":{"x":1080,"y":1650}}},"red":{".":{"regular":{"x":880,"y":1650},"shiny":{"x":920,"y":1650}}},"white":{".":{"regular":{"x":1120,"y":1650},"shiny":{"x":1160,"y":1650}}},"yellow":{".":{"regular":{"x":1200,"y":1650},"shiny":{"x":1240,"y":1650}}}},"skiddo":{".":{".":{"regular":{"x":0,"y":1680},"shiny":{"x":40,"y":1680}}}},"gogoat":{".":{".":{"regular":{"x":80,"y":1680},"shiny":{"x":120,"y":1680}}}},"pancham":{".":{".":{"regular":{"x":160,"y":1680},"shiny":{"x":200,"y":1680}}}},"pangoro":{".":{".":{"regular":{"x":240,"y":1680},"shiny":{"x":280,"y":1680}}}},"furfrou":{".":{".":{"regular":{"x":320,"y":1680},"shiny":{"x":360,"y":1680}}},"dandy":{".":{"regular":{"x":400,"y":1680},"shiny":{"x":440,"y":1680}}},"debutante":{".":{"regular":{"x":480,"y":1680},"shiny":{"x":560,"y":1680}},"right":{"regular":{"x":520,"y":1680},"shiny":{"x":600,"y":1680}}},"diamond":{".":{"regular":{"x":640,"y":1680},"shiny":{"x":680,"y":1680}}},"heart":{".":{"regular":{"x":720,"y":1680},"shiny":{"x":760,"y":1680}}},"kabuki":{".":{"regular":{"x":800,"y":1680},"shiny":{"x":840,"y":1680}}},"la-reine":{".":{"regular":{"x":880,"y":1680},"shiny":{"x":920,"y":1680}}},"matron":{".":{"regular":{"x":960,"y":1680},"shiny":{"x":1000,"y":1680}}},"pharaoh":{".":{"regular":{"x":1040,"y":1680},"shiny":{"x":1080,"y":1680}}},"star":{".":{"regular":{"x":1120,"y":1680},"shiny":{"x":1160,"y":1680}}}},"espurr":{".":{".":{"regular":{"x":1200,"y":1680},"shiny":{"x":1240,"y":1680}}}},"meowstic":{".":{".":{"regular":{"x":0,"y":1710},"shiny":{"x":80,"y":1710}},"female":{"regular":{"x":40,"y":1710},"shiny":{"x":120,"y":1710}}}},"honedge":{".":{".":{"regular":{"x":160,"y":1710},"shiny":{"x":200,"y":1710}}}},"doublade":{".":{".":{"regular":{"x":240,"y":1710},"shiny":{"x":280,"y":1710}}}},"aegislash":{".":{".":{"regular":{"x":320,"y":1710},"shiny":{"x":360,"y":1710}}},"blade":{".":{"regular":{"x":400,"y":1710},"shiny":{"x":440,"y":1710}}},"shield":{".":{"regular":{"x":320,"y":1710},"shiny":{"x":360,"y":1710}}}},"spritzee":{".":{".":{"regular":{"x":480,"y":1710},"shiny":{"x":520,"y":1710}}}},"aromatisse":{".":{".":{"regular":{"x":560,"y":1710},"shiny":{"x":600,"y":1710}}}},"swirlix":{".":{".":{"regular":{"x":640,"y":1710},"shiny":{"x":680,"y":1710}}}},"slurpuff":{".":{".":{"regular":{"x":720,"y":1710},"shiny":{"x":760,"y":1710}}}},"inkay":{".":{".":{"regular":{"x":800,"y":1710},"shiny":{"x":840,"y":1710}}}},"malamar":{".":{".":{"regular":{"x":880,"y":1710},"shiny":{"x":920,"y":1710}}}},"binacle":{".":{".":{"regular":{"x":960,"y":1710},"shiny":{"x":1000,"y":1710}}}},"barbaracle":{".":{".":{"regular":{"x":1040,"y":1710},"shiny":{"x":1120,"y":1710}},"right":{"regular":{"x":1080,"y":1710},"shiny":{"x":1160,"y":1710}}}},"skrelp":{".":{".":{"regular":{"x":1200,"y":1710},"shiny":{"x":1240,"y":1710}}}},"dragalge":{".":{".":{"regular":{"x":0,"y":1740},"shiny":{"x":40,"y":1740}}}},"clauncher":{".":{".":{"regular":{"x":80,"y":1740},"shiny":{"x":160,"y":1740}},"right":{"regular":{"x":120,"y":1740},"shiny":{"x":200,"y":1740}}}},"clawitzer":{".":{".":{"regular":{"x":240,"y":1740},"shiny":{"x":320,"y":1740}},"right":{"regular":{"x":280,"y":1740},"shiny":{"x":360,"y":1740}}}},"helioptile":{".":{".":{"regular":{"x":400,"y":1740},"shiny":{"x":440,"y":1740}}}},"heliolisk":{".":{".":{"regular":{"x":480,"y":1740},"shiny":{"x":520,"y":1740}}}},"tyrunt":{".":{".":{"regular":{"x":560,"y":1740},"shiny":{"x":600,"y":1740}}}},"tyrantrum":{".":{".":{"regular":{"x":640,"y":1740},"shiny":{"x":680,"y":1740}}}},"amaura":{".":{".":{"regular":{"x":720,"y":1740},"shiny":{"x":760,"y":1740}}}},"aurorus":{".":{".":{"regular":{"x":800,"y":1740},"shiny":{"x":840,"y":1740}}}},"sylveon":{".":{".":{"regular":{"x":880,"y":1740},"shiny":{"x":960,"y":1740}},"right":{"regular":{"x":920,"y":1740},"shiny":{"x":1000,"y":1740}}}},"hawlucha":{".":{".":{"regular":{"x":1040,"y":1740},"shiny":{"x":1080,"y":1740}}}},"dedenne":{".":{".":{"regular":{"x":1120,"y":1740},"shiny":{"x":1160,"y":1740}}}},"carbink":{".":{".":{"regular":{"x":1200,"y":1740},"shiny":{"x":1240,"y":1740}}}},"goomy":{".":{".":{"regular":{"x":0,"y":1770},"shiny":{"x":40,"y":1770}}}},"sliggoo":{".":{".":{"regular":{"x":80,"y":1770},"shiny":{"x":120,"y":1770}}}},"goodra":{".":{".":{"regular":{"x":160,"y":1770},"shiny":{"x":200,"y":1770}}}},"klefki":{".":{".":{"regular":{"x":240,"y":1770},"shiny":{"x":320,"y":1770}},"right":{"regular":{"x":280,"y":1770},"shiny":{"x":360,"y":1770}}}},"phantump":{".":{".":{"regular":{"x":400,"y":1770},"shiny":{"x":440,"y":1770}}}},"trevenant":{".":{".":{"regular":{"x":480,"y":1770},"shiny":{"x":520,"y":1770}}}},"pumpkaboo":{".":{".":{"regular":{"x":560,"y":1770},"shiny":{"x":600,"y":1770}}},"average":{".":{"regular":{"x":560,"y":1770},"shiny":{"x":600,"y":1770}}},"large":{".":{"regular":{"x":560,"y":1770},"shiny":{"x":600,"y":1770}}},"small":{".":{"regular":{"x":560,"y":1770},"shiny":{"x":600,"y":1770}}},"super":{".":{"regular":{"x":560,"y":1770},"shiny":{"x":600,"y":1770}}}},"gourgeist":{".":{".":{"regular":{"x":640,"y":1770},"shiny":{"x":680,"y":1770}}},"average":{".":{"regular":{"x":640,"y":1770},"shiny":{"x":680,"y":1770}}},"large":{".":{"regular":{"x":640,"y":1770},"shiny":{"x":680,"y":1770}}},"small":{".":{"regular":{"x":640,"y":1770},"shiny":{"x":680,"y":1770}}},"super":{".":{"regular":{"x":640,"y":1770},"shiny":{"x":680,"y":1770}}}},"bergmite":{".":{".":{"regular":{"x":720,"y":1770},"shiny":{"x":760,"y":1770}}}},"avalugg":{".":{".":{"regular":{"x":800,"y":1770},"shiny":{"x":840,"y":1770}}}},"noibat":{".":{".":{"regular":{"x":880,"y":1770},"shiny":{"x":920,"y":1770}}}},"noivern":{".":{".":{"regular":{"x":960,"y":1770},"shiny":{"x":1000,"y":1770}}}},"xerneas":{".":{".":{"regular":{"x":1040,"y":1770},"shiny":{"x":1080,"y":1770}}},"active":{".":{"regular":{"x":1040,"y":1770},"shiny":{"x":1080,"y":1770}}},"neutral":{".":{"regular":{"x":1120,"y":1770},"shiny":{"x":1160,"y":1770}}}},"yveltal":{".":{".":{"regular":{"x":1200,"y":1770},"shiny":{"x":1240,"y":1770}}}},"zygarde":{".":{".":{"regular":{"x":0,"y":1800},"shiny":{"x":80,"y":1800}},"right":{"regular":{"x":40,"y":1800},"shiny":{"x":120,"y":1800}}}},"diancie":{".":{".":{"regular":{"x":160,"y":1800},"shiny":{"x":200,"y":1800}}},"mega":{".":{"regular":{"x":240,"y":1800},"shiny":{"x":280,"y":1800}}}},"hoopa":{".":{".":{"regular":{"x":320,"y":1800},"shiny":{"x":360,"y":1800}}},"unbound":{".":{"regular":{"x":400,"y":1800},"shiny":{"x":440,"y":1800}}}},"volcanion":{".":{".":{"regular":{"x":480,"y":1800},"shiny":{"x":520,"y":1800}}}}},"etc":{"egg":{"x":0,"y":1830,"w":40,"h":30},"unknown-pkmn":{"x":40,"y":1830,"w":40,"h":30},"unknown-item-2":{"x":450,"y":1892,"w":30,"h":30},"unknown-item":{"x":480,"y":1892,"w":30,"h":30},"ball-mega":{"x":810,"y":2342,"w":16,"h":16},"ball-fainted":{"x":826,"y":2342,"w":14,"h":14},"ball-normal":{"x":840,"y":2342,"w":14,"h":14},"ball-null":{"x":854,"y":2342,"w":14,"h":14},"ball-sick":{"x":868,"y":2342,"w":14,"h":14}},"body-style":{"bipedal-tailed":{"x":0,"y":1860},"bipedal-tailless":{"x":32,"y":1860},"fins":{"x":64,"y":1860},"head-arms":{"x":96,"y":1860},"head-base":{"x":128,"y":1860},"head-legs":{"x":160,"y":1860},"head":{"x":192,"y":1860},"insectoid":{"x":224,"y":1860},"multiple":{"x":256,"y":1860},"quadruped":{"x":288,"y":1860},"serpentine":{"x":320,"y":1860},"tentacles":{"x":352,"y":1860},"wings-multiple":{"x":384,"y":1860},"wings-single":{"x":416,"y":1860}},"apricorn":{"black":{"x":448,"y":1860},"blue":{"x":478,"y":1860},"green":{"x":508,"y":1860},"pink":{"x":538,"y":1860},"red":{"x":568,"y":1860},"white":{"x":598,"y":1860},"yellow":{"x":628,"y":1860}},"battle-item":{"dire-hit":{"x":658,"y":1860},"guard-spec":{"x":688,"y":1860},"x-accuracy":{"x":718,"y":1860},"x-attack":{"x":748,"y":1860},"x-defense":{"x":778,"y":1860},"x-sp-atk":{"x":808,"y":1860},"x-sp-def":{"x":838,"y":1860},"x-speed":{"x":868,"y":1860}},"berry":{"aguav":{"x":898,"y":1860},"apicot":{"x":928,"y":1860},"aspear":{"x":958,"y":1860},"babiri":{"x":988,"y":1860},"belue":{"x":1018,"y":1860},"bluk":{"x":1048,"y":1860},"charti":{"x":1078,"y":1860},"cheri":{"x":1108,"y":1860},"chesto":{"x":1138,"y":1860},"chilan":{"x":1168,"y":1860},"chople":{"x":1198,"y":1860},"coba":{"x":1228,"y":1860},"colbur":{"x":80,"y":1830},"cornn":{"x":110,"y":1830},"custap":{"x":140,"y":1830},"durin":{"x":170,"y":1830},"enigma":{"x":200,"y":1830},"figy":{"x":230,"y":1830},"ganlon":{"x":260,"y":1830},"grepa":{"x":290,"y":1830},"haban":{"x":320,"y":1830},"hondew":{"x":350,"y":1830},"iapapa":{"x":380,"y":1830},"jaboca":{"x":410,"y":1830},"kasib":{"x":440,"y":1830},"kebia":{"x":470,"y":1830},"kee":{"x":500,"y":1830},"kelpsy":{"x":530,"y":1830},"lansat":{"x":560,"y":1830},"leppa":{"x":590,"y":1830},"liechi":{"x":620,"y":1830},"lum":{"x":650,"y":1830},"mago":{"x":680,"y":1830},"magost":{"x":710,"y":1830},"maranga":{"x":740,"y":1830},"micle":{"x":770,"y":1830},"nanab":{"x":800,"y":1830},"nomel":{"x":830,"y":1830},"occa":{"x":860,"y":1830},"oran":{"x":890,"y":1830},"pamtre":{"x":920,"y":1830},"passho":{"x":950,"y":1830},"payapa":{"x":980,"y":1830},"pecha":{"x":1010,"y":1830},"persim":{"x":1040,"y":1830},"petaya":{"x":1070,"y":1830},"pinap":{"x":1100,"y":1830},"pomeg":{"x":1130,"y":1830},"qualot":{"x":1160,"y":1830},"rabuta":{"x":1190,"y":1830},"rawst":{"x":1220,"y":1830},"razz":{"x":1250,"y":1830},"rindo":{"x":0,"y":1892},"roseli":{"x":30,"y":1892},"rowap":{"x":60,"y":1892},"salac":{"x":90,"y":1892},"shuca":{"x":120,"y":1892},"sitrus":{"x":150,"y":1892},"spelon":{"x":180,"y":1892},"starf":{"x":210,"y":1892},"tamato":{"x":240,"y":1892},"tanga":{"x":270,"y":1892},"wacan":{"x":300,"y":1892},"watmel":{"x":330,"y":1892},"wepear":{"x":360,"y":1892},"wiki":{"x":390,"y":1892},"yache":{"x":420,"y":1892}},"ev-item":{"macho-brace":{"x":510,"y":1892},"power-anklet":{"x":540,"y":1892},"power-band":{"x":570,"y":1892},"power-belt":{"x":600,"y":1892},"power-bracer":{"x":630,"y":1892},"power-lens":{"x":660,"y":1892},"power-weight":{"x":690,"y":1892}},"evo-item":{"dawn-stone":{"x":720,"y":1892},"deep-sea-scale":{"x":750,"y":1892},"deep-sea-tooth":{"x":780,"y":1892},"dragon-scale":{"x":810,"y":1892},"dubious-disc":{"x":840,"y":1892},"dusk-stone":{"x":870,"y":1892},"electirizer":{"x":900,"y":1892},"fire-stone":{"x":930,"y":1892},"kings-rock":{"x":960,"y":1892},"leaf-stone":{"x":990,"y":1892},"magmarizer":{"x":1020,"y":1892},"metal-coat":{"x":1050,"y":1892},"moon-stone":{"x":1080,"y":1892},"oval-stone":{"x":1110,"y":1892},"prism-scale":{"x":1140,"y":1892},"protector":{"x":1170,"y":1892},"razor-claw":{"x":1200,"y":1892},"razor-fang":{"x":1230,"y":1892},"reaper-cloth":{"x":0,"y":1922},"sachet":{"x":30,"y":1922},"shiny-stone":{"x":60,"y":1922},"sun-stone":{"x":90,"y":1922},"thunder-stone":{"x":120,"y":1922},"up-grade":{"x":150,"y":1922},"water-stone":{"x":180,"y":1922},"whipped-dream":{"x":210,"y":1922}},"flute":{"black":{"x":240,"y":1922},"blue":{"x":270,"y":1922},"red":{"x":300,"y":1922},"white":{"x":330,"y":1922},"yellow":{"x":360,"y":1922}},"fossil":{"armor":{"x":390,"y":1922},"claw":{"x":420,"y":1922},"cover":{"x":450,"y":1922},"dome":{"x":480,"y":1922},"helix":{"x":510,"y":1922},"jaw":{"x":540,"y":1922},"plume":{"x":570,"y":1922},"root":{"x":600,"y":1922},"sail":{"x":630,"y":1922},"skull":{"x":660,"y":1922}},"gem":{"bug":{"x":690,"y":1922},"dark":{"x":720,"y":1922},"dragon":{"x":750,"y":1922},"electric":{"x":780,"y":1922},"fairy":{"x":810,"y":1922},"fighting":{"x":840,"y":1922},"fire":{"x":870,"y":1922},"flying":{"x":900,"y":1922},"ghost":{"x":930,"y":1922},"grass":{"x":960,"y":1922},"ground":{"x":990,"y":1922},"ice":{"x":1020,"y":1922},"normal":{"x":1050,"y":1922},"poison":{"x":1080,"y":1922},"psychic":{"x":1110,"y":1922},"rock":{"x":1140,"y":1922},"steel":{"x":1170,"y":1922},"water":{"x":1200,"y":1922}},"hm":{"fighting":{"x":1230,"y":1922},"flying":{"x":0,"y":1952},"normal":{"x":30,"y":1952},"water":{"x":60,"y":1952}},"hold-item":{"absorb-bulb":{"x":90,"y":1952},"adamant-orb":{"x":120,"y":1952},"air-balloon":{"x":150,"y":1952},"amulet-coin":{"x":180,"y":1952},"assault-vest":{"x":210,"y":1952},"big-root":{"x":240,"y":1952},"binding-band":{"x":270,"y":1952},"black-belt":{"x":300,"y":1952},"black-glasses":{"x":330,"y":1952},"black-sludge":{"x":360,"y":1952},"blue-orb":{"x":390,"y":1952},"bright-powder":{"x":420,"y":1952},"burn-drive":{"x":450,"y":1952},"cell-battery":{"x":480,"y":1952},"charcoal":{"x":510,"y":1952},"chill-drive":{"x":540,"y":1952},"choice-band":{"x":570,"y":1952},"choice-scarf":{"x":600,"y":1952},"choice-specs":{"x":630,"y":1952},"cleanse-tag":{"x":660,"y":1952},"damp-rock":{"x":690,"y":1952},"destiny-knot":{"x":720,"y":1952},"douse-drive":{"x":750,"y":1952},"dragon-fang":{"x":780,"y":1952},"eject-button":{"x":810,"y":1952},"everstone":{"x":840,"y":1952},"eviolite":{"x":870,"y":1952},"expert-belt":{"x":900,"y":1952},"flame-orb":{"x":930,"y":1952},"float-stone":{"x":960,"y":1952},"focus-band":{"x":990,"y":1952},"focus-sash":{"x":1020,"y":1952},"grip-claw":{"x":1050,"y":1952},"griseous-orb":{"x":1080,"y":1952},"hard-stone":{"x":1110,"y":1952},"heat-rock":{"x":1140,"y":1952},"icy-rock":{"x":1170,"y":1952},"iron-ball":{"x":1200,"y":1952},"kings-rock":{"x":1230,"y":1952},"lagging-tail":{"x":0,"y":1982},"leftovers":{"x":30,"y":1982},"life-orb":{"x":60,"y":1982},"light-ball":{"x":90,"y":1982},"light-clay":{"x":120,"y":1982},"lucky-egg":{"x":150,"y":1982},"lucky-punch":{"x":180,"y":1982},"luminous-moss":{"x":210,"y":1982},"lustrous-orb":{"x":240,"y":1982},"magnet":{"x":270,"y":1982},"mental-herb":{"x":300,"y":1982},"metal-coat":{"x":330,"y":1982},"metal-powder":{"x":360,"y":1982},"metronome":{"x":390,"y":1982},"miracle-seed":{"x":420,"y":1982},"muscle-band":{"x":450,"y":1982},"mystic-water":{"x":480,"y":1982},"never-melt-ice":{"x":510,"y":1982},"poison-barb":{"x":540,"y":1982},"power-herb":{"x":570,"y":1982},"quick-claw":{"x":600,"y":1982},"quick-powder":{"x":630,"y":1982},"red-card":{"x":660,"y":1982},"red-orb":{"x":690,"y":1982},"ring-target":{"x":720,"y":1982},"rocky-helmet":{"x":750,"y":1982},"safety-goggles":{"x":780,"y":1982},"scope-lens":{"x":810,"y":1982},"sharp-beak":{"x":840,"y":1982},"shed-shell":{"x":870,"y":1982},"shell-bell":{"x":900,"y":1982},"shock-drive":{"x":930,"y":1982},"silk-scarf":{"x":960,"y":1982},"silver-powder":{"x":990,"y":1982},"smoke-ball":{"x":1020,"y":1982},"smooth-rock":{"x":1050,"y":1982},"snowball":{"x":1080,"y":1982},"soft-sand":{"x":1110,"y":1982},"soul-dew":{"x":1140,"y":1982},"spell-tag":{"x":1170,"y":1982},"stick":{"x":1200,"y":1982},"sticky-barb":{"x":1230,"y":1982},"thick-club":{"x":0,"y":2012},"toxic-orb":{"x":30,"y":2012},"twisted-spoon":{"x":60,"y":2012},"weakness-policy":{"x":90,"y":2012},"white-herb":{"x":120,"y":2012},"wide-lens":{"x":150,"y":2012},"wise-glasses":{"x":180,"y":2012},"zoom-lens":{"x":210,"y":2012}},"incense":{"full":{"x":240,"y":2012},"lax":{"x":270,"y":2012},"luck":{"x":300,"y":2012},"odd":{"x":330,"y":2012},"pure":{"x":360,"y":2012},"rock":{"x":390,"y":2012},"rose":{"x":420,"y":2012},"sea":{"x":450,"y":2012},"wave":{"x":480,"y":2012}},"other-item":{"discount-coupon":{"x":510,"y":2012},"escape-rope":{"x":540,"y":2012},"fluffy-tail":{"x":570,"y":2012},"heart-scale":{"x":600,"y":2012},"honey":{"x":630,"y":2012},"max-repel":{"x":660,"y":2012},"odd-keystone":{"x":690,"y":2012},"pass-orb":{"x":720,"y":2012},"poke-doll":{"x":750,"y":2012},"poke-toy":{"x":780,"y":2012},"repel":{"x":810,"y":2012},"soothe-bell":{"x":840,"y":2012},"strange-souvenir":{"x":870,"y":2012},"super-repel":{"x":900,"y":2012}},"key-item":{"acro-bike":{"x":930,"y":2012},"adventure-rules":{"x":960,"y":2012},"apricorn-box":{"x":990,"y":2012},"aqua-suit":{"x":1020,"y":2012},"auroraticket":{"x":1050,"y":2012},"azure-flute":{"x":1080,"y":2012},"basement-key-gen4":{"x":1110,"y":2012},"basement-key":{"x":1140,"y":2012},"berry-pots":{"x":1170,"y":2012},"berry-pouch":{"x":1200,"y":2012},"bike-voucher":{"x":1230,"y":2012},"blue-card":{"x":0,"y":2042},"blue-orb-gen3":{"x":30,"y":2042},"blue-orb":{"x":60,"y":2042},"card-key-gen3":{"x":90,"y":2042},"card-key":{"x":120,"y":2042},"clear-bell":{"x":150,"y":2042},"coin-case":{"x":180,"y":2042},"colress-machine":{"x":210,"y":2042},"common-stone":{"x":240,"y":2042},"contest-costume-cool":{"x":270,"y":2042},"contest-costume-cute":{"x":300,"y":2042},"contest-pass":{"x":330,"y":2042},"coupon-1":{"x":360,"y":2042},"coupon-2":{"x":390,"y":2042},"coupon-3":{"x":420,"y":2042},"dark-stone":{"x":450,"y":2042},"data-card":{"x":480,"y":2042},"devon-goods":{"x":510,"y":2042},"devon-scope-gen3":{"x":540,"y":2042},"devon-scope":{"x":570,"y":2042},"devon-scuba-gear":{"x":600,"y":2042},"dna-splicers":{"x":630,"y":2042},"dowsing-machine-gen5":{"x":660,"y":2042},"dowsing-machine-xy":{"x":690,"y":2042},"dowsing-machine":{"x":720,"y":2042},"dragon-skull":{"x":750,"y":2042},"dropped-item-red":{"x":780,"y":2042},"dropped-item-yellow":{"x":810,"y":2042},"dropped-item":{"x":840,"y":2042},"elevator-key":{"x":870,"y":2042},"enigma-stone":{"x":900,"y":2042},"eon-flute":{"x":930,"y":2042},"eon-ticket":{"x":960,"y":2042},"exp-share":{"x":990,"y":2042},"explorer-kit":{"x":1020,"y":2042},"fame-checker":{"x":1050,"y":2042},"fashion-case":{"x":1080,"y":2042},"galactic-key":{"x":1110,"y":2042},"gb-sounds":{"x":1140,"y":2042},"go-goggles-gen3":{"x":1170,"y":2042},"go-goggles":{"x":1200,"y":2042},"god-stone":{"x":1230,"y":2042},"gold-teeth":{"x":0,"y":2072},"good-rod":{"x":30,"y":2072},"gracidea":{"x":60,"y":2072},"gram-1":{"x":90,"y":2072},"gram-2":{"x":120,"y":2072},"gram-3":{"x":150,"y":2072},"green-bike":{"x":180,"y":2072},"grubby-hanky":{"x":210,"y":2072},"holo-caster-green":{"x":240,"y":2072},"holo-caster-red":{"x":270,"y":2072},"holo-caster":{"x":300,"y":2072},"honor-of-kalos":{"x":330,"y":2072},"intriguing-stone":{"x":360,"y":2072},"itemfinder":{"x":390,"y":2072},"jade-orb":{"x":420,"y":2072},"journal":{"x":450,"y":2072},"lens-case":{"x":480,"y":2072},"letter":{"x":510,"y":2072},"liberty-pass":{"x":540,"y":2072},"lift-key":{"x":570,"y":2072},"light-stone":{"x":600,"y":2072},"lock-capsule-gen4":{"x":630,"y":2072},"lock-capsule":{"x":660,"y":2072},"looker-ticket":{"x":690,"y":2072},"loot-sack":{"x":720,"y":2072},"lost-item-mimejr":{"x":750,"y":2072},"lost-item":{"x":780,"y":2072},"lunar-wing":{"x":810,"y":2072},"mach-bike":{"x":840,"y":2072},"machine-part":{"x":870,"y":2072},"magma-emblem":{"x":900,"y":2072},"magma-stone":{"x":930,"y":2072},"magma-suit":{"x":960,"y":2072},"medal-box":{"x":990,"y":2072},"mega-bracelet":{"x":1020,"y":2072},"mega-charm":{"x":1050,"y":2072},"mega-cuff":{"x":1080,"y":2072},"mega-ring":{"x":1110,"y":2072},"member-card":{"x":1140,"y":2072},"meteorite-shard":{"x":1170,"y":2072},"meteorite-stage-1":{"x":1200,"y":2072},"meteorite-stage-2":{"x":1230,"y":2072},"meteorite-stage-3":{"x":0,"y":2102},"meteorite-stage-4":{"x":30,"y":2102},"mystery-egg":{"x":60,"y":2102},"mysticticket":{"x":90,"y":2102},"oaks-letter":{"x":120,"y":2102},"oaks-parcel":{"x":150,"y":2102},"old-amber":{"x":180,"y":2102},"old-charm":{"x":210,"y":2102},"old-rod":{"x":240,"y":2102},"old-sea-map":{"x":270,"y":2102},"oval-charm":{"x":300,"y":2102},"pair-of-tickets":{"x":330,"y":2102},"pal-pad":{"x":360,"y":2102},"parcel":{"x":390,"y":2102},"pass":{"x":420,"y":2102},"permit":{"x":450,"y":2102},"photo-album":{"x":480,"y":2102},"plasma-card":{"x":510,"y":2102},"poffin-case":{"x":540,"y":2102},"point-card":{"x":570,"y":2102},"poke-flute-gen3":{"x":600,"y":2102},"poke-flute":{"x":630,"y":2102},"poke-radar":{"x":660,"y":2102},"pokeblock-case":{"x":690,"y":2102},"pokeblock-kit":{"x":720,"y":2102},"powder-jar":{"x":750,"y":2102},"power-plant-pass":{"x":780,"y":2102},"prison-bottle":{"x":810,"y":2102},"profs-letter":{"x":840,"y":2102},"prop-case":{"x":870,"y":2102},"rainbow-pass":{"x":900,"y":2102},"rainbow-wing":{"x":930,"y":2102},"red-chain":{"x":960,"y":2102},"red-orb-gen3":{"x":990,"y":2102},"red-orb":{"x":1020,"y":2102},"red-scale":{"x":1050,"y":2102},"reveal-glass":{"x":1080,"y":2102},"rm-1-key":{"x":1110,"y":2102},"rm-2-key":{"x":1140,"y":2102},"rm-4-key":{"x":1170,"y":2102},"rm-6-key":{"x":1200,"y":2102},"roller-skates":{"x":1230,"y":2102},"ruby":{"x":0,"y":2132},"rule-book":{"x":30,"y":2132},"sapphire":{"x":60,"y":2132},"scanner":{"x":90,"y":2132},"seal-bag":{"x":120,"y":2132},"seal-case":{"x":150,"y":2132},"secret-key-gen3":{"x":180,"y":2132},"secret-key":{"x":210,"y":2132},"secret-potion":{"x":240,"y":2132},"shiny-charm":{"x":270,"y":2132},"silph-scope":{"x":300,"y":2132},"silver-wing":{"x":330,"y":2132},"soot-sack":{"x":360,"y":2132},"sprayduck":{"x":390,"y":2132},"sprinklotad":{"x":420,"y":2132},"squirt-bottle":{"x":450,"y":2132},"ss-ticket":{"x":480,"y":2132},"storage-key-gen3":{"x":510,"y":2132},"storage-key":{"x":540,"y":2132},"suite-key":{"x":570,"y":2132},"super-rod":{"x":600,"y":2132},"tea":{"x":630,"y":2132},"teachy-tv":{"x":660,"y":2132},"tidal-bell":{"x":690,"y":2132},"tm-case":{"x":720,"y":2132},"tmv-pass":{"x":750,"y":2132},"town-map-gen3":{"x":780,"y":2132},"town-map":{"x":810,"y":2132},"travel-trunk-gold":{"x":840,"y":2132},"travel-trunk-silver":{"x":870,"y":2132},"tri-pass":{"x":900,"y":2132},"unown-report":{"x":930,"y":2132},"vs-recorder":{"x":960,"y":2132},"vs-seeker":{"x":990,"y":2132},"wailmer-pail":{"x":1020,"y":2132},"works-key":{"x":1050,"y":2132},"xtransceiver-blue":{"x":1080,"y":2132},"xtransceiver-red":{"x":1110,"y":2132},"xtransceiver-yellow":{"x":1140,"y":2132},"xtransceiver":{"x":1170,"y":2132},"yellow-bike":{"x":1200,"y":2132}},"mail":{"air":{"x":1230,"y":2132},"bead":{"x":0,"y":2162},"bloom":{"x":30,"y":2162},"brick":{"x":60,"y":2162},"bridge-d":{"x":90,"y":2162},"bridge-m":{"x":120,"y":2162},"bridge-s":{"x":150,"y":2162},"bridge-t":{"x":180,"y":2162},"bridge-v":{"x":210,"y":2162},"bubble":{"x":240,"y":2162},"dream":{"x":270,"y":2162},"fab":{"x":300,"y":2162},"favored":{"x":330,"y":2162},"flame":{"x":360,"y":2162},"glitter":{"x":390,"y":2162},"grass":{"x":420,"y":2162},"greet":{"x":450,"y":2162},"harbor":{"x":480,"y":2162},"heart":{"x":510,"y":2162},"inquiry":{"x":540,"y":2162},"like":{"x":570,"y":2162},"mech":{"x":600,"y":2162},"mosaic":{"x":630,"y":2162},"orange":{"x":660,"y":2162},"reply":{"x":690,"y":2162},"retro":{"x":720,"y":2162},"rsvp":{"x":750,"y":2162},"shadow":{"x":780,"y":2162},"snow":{"x":810,"y":2162},"space":{"x":840,"y":2162},"steel":{"x":870,"y":2162},"thanks":{"x":900,"y":2162},"tropic":{"x":930,"y":2162},"tunnel":{"x":960,"y":2162},"wave":{"x":990,"y":2162},"wood":{"x":1020,"y":2162}},"medicine":{"ability-capsule":{"x":1050,"y":2162},"antidote":{"x":1080,"y":2162},"awakening":{"x":1110,"y":2162},"berry-juice":{"x":1140,"y":2162},"burn-heal":{"x":1170,"y":2162},"calcium":{"x":1200,"y":2162},"carbos":{"x":1230,"y":2162},"casteliacone":{"x":0,"y":2192},"clever-wing":{"x":30,"y":2192},"elixir":{"x":60,"y":2192},"energy-powder":{"x":90,"y":2192},"energy-root":{"x":120,"y":2192},"ether":{"x":150,"y":2192},"fresh-water":{"x":180,"y":2192},"full-heal":{"x":210,"y":2192},"full-restore":{"x":240,"y":2192},"genius-wing":{"x":270,"y":2192},"heal-powder":{"x":300,"y":2192},"health-wing":{"x":330,"y":2192},"hp-up":{"x":360,"y":2192},"hyper-potion":{"x":390,"y":2192},"ice-heal":{"x":420,"y":2192},"iron":{"x":450,"y":2192},"lava-cookie":{"x":480,"y":2192},"lemonade":{"x":510,"y":2192},"lumiose-galette":{"x":540,"y":2192},"max-elixir":{"x":570,"y":2192},"max-ether":{"x":600,"y":2192},"max-potion":{"x":630,"y":2192},"max-revive":{"x":660,"y":2192},"moomoo-milk":{"x":690,"y":2192},"muscle-wing":{"x":720,"y":2192},"old-gateau":{"x":750,"y":2192},"paralyze-heal":{"x":780,"y":2192},"potion":{"x":810,"y":2192},"pp-max":{"x":840,"y":2192},"pp-up":{"x":870,"y":2192},"protein":{"x":900,"y":2192},"rage-candy-bar":{"x":930,"y":2192},"rare-candy":{"x":960,"y":2192},"resist-wing":{"x":990,"y":2192},"revival-herb":{"x":1020,"y":2192},"revive":{"x":1050,"y":2192},"sacred-ash":{"x":1080,"y":2192},"shalour-sable":{"x":1110,"y":2192},"soda-pop":{"x":1140,"y":2192},"super-potion":{"x":1170,"y":2192},"sweet-heart":{"x":1200,"y":2192},"swift-wing":{"x":1230,"y":2192},"zinc":{"x":0,"y":2222}},"mega-stone":{"abomasite":{"x":30,"y":2222},"absolite":{"x":60,"y":2222},"aerodactylite":{"x":90,"y":2222},"aggronite":{"x":120,"y":2222},"alakazite":{"x":150,"y":2222},"altarianite":{"x":180,"y":2222},"ampharosite":{"x":210,"y":2222},"audinite":{"x":240,"y":2222},"banettite":{"x":270,"y":2222},"beedrillite":{"x":300,"y":2222},"blastoisinite":{"x":330,"y":2222},"blazikenite":{"x":360,"y":2222},"cameruptite":{"x":390,"y":2222},"charizardite-x":{"x":420,"y":2222},"charizardite-y":{"x":450,"y":2222},"diancite":{"x":480,"y":2222},"galladite":{"x":510,"y":2222},"garchompite":{"x":540,"y":2222},"gardevoirite":{"x":570,"y":2222},"gengarite":{"x":600,"y":2222},"glalite":{"x":630,"y":2222},"gyaradosite":{"x":660,"y":2222},"heracronite":{"x":690,"y":2222},"houndoominite":{"x":720,"y":2222},"kangaskhanite":{"x":750,"y":2222},"latiasite":{"x":780,"y":2222},"latiosite":{"x":810,"y":2222},"lopunnite":{"x":840,"y":2222},"lucarionite":{"x":870,"y":2222},"manectite":{"x":900,"y":2222},"mawilite":{"x":930,"y":2222},"medichamite":{"x":960,"y":2222},"metagrossite":{"x":990,"y":2222},"mewtwonite-x":{"x":1020,"y":2222},"mewtwonite-y":{"x":1050,"y":2222},"pidgeotite":{"x":1080,"y":2222},"pinsirite":{"x":1110,"y":2222},"sablenite":{"x":1140,"y":2222},"salamencite":{"x":1170,"y":2222},"sceptilite":{"x":1200,"y":2222},"scizorite":{"x":1230,"y":2222},"sharpedonite":{"x":0,"y":2252},"slowbronite":{"x":30,"y":2252},"steelixite":{"x":60,"y":2252},"swampertite":{"x":90,"y":2252},"tyranitarite":{"x":120,"y":2252},"venusaurite":{"x":150,"y":2252}},"mulch":{"amaze":{"x":180,"y":2252},"boost":{"x":210,"y":2252},"damp":{"x":240,"y":2252},"gooey":{"x":270,"y":2252},"growth":{"x":300,"y":2252},"rich":{"x":330,"y":2252},"stable":{"x":360,"y":2252},"surprise":{"x":390,"y":2252}},"plate":{"draco":{"x":420,"y":2252},"dread":{"x":450,"y":2252},"earth":{"x":480,"y":2252},"fist":{"x":510,"y":2252},"flame":{"x":540,"y":2252},"icicle":{"x":570,"y":2252},"insect":{"x":600,"y":2252},"iron":{"x":630,"y":2252},"meadow":{"x":660,"y":2252},"mind":{"x":690,"y":2252},"pixie":{"x":720,"y":2252},"sky":{"x":750,"y":2252},"splash":{"x":780,"y":2252},"spooky":{"x":810,"y":2252},"stone":{"x":840,"y":2252},"toxic":{"x":870,"y":2252},"zap":{"x":900,"y":2252}},"pokeball":{"cherish":{"x":930,"y":2252},"dive":{"x":960,"y":2252},"dream":{"x":990,"y":2252},"dusk":{"x":1020,"y":2252},"fast":{"x":1050,"y":2252},"friend":{"x":1080,"y":2252},"great":{"x":1110,"y":2252},"heal":{"x":1140,"y":2252},"heavy":{"x":1170,"y":2252},"level":{"x":1200,"y":2252},"love":{"x":1230,"y":2252},"lure":{"x":0,"y":2282},"luxury":{"x":30,"y":2282},"master":{"x":60,"y":2282},"moon":{"x":90,"y":2282},"nest":{"x":120,"y":2282},"net":{"x":150,"y":2282},"park":{"x":180,"y":2282},"poke":{"x":210,"y":2282},"premier":{"x":240,"y":2282},"quick":{"x":270,"y":2282},"repeat":{"x":300,"y":2282},"safari":{"x":330,"y":2282},"sport":{"x":360,"y":2282},"timer":{"x":390,"y":2282},"ultra":{"x":420,"y":2282}},"scarf":{"blue":{"x":450,"y":2282},"green":{"x":480,"y":2282},"pink":{"x":510,"y":2282},"red":{"x":540,"y":2282},"yellow":{"x":570,"y":2282}},"shard":{"blue":{"x":600,"y":2282},"green":{"x":630,"y":2282},"red":{"x":660,"y":2282},"yellow":{"x":690,"y":2282}},"tm":{"bug":{"x":720,"y":2282},"dark":{"x":750,"y":2282},"dragon":{"x":780,"y":2282},"electric":{"x":810,"y":2282},"fairy":{"x":840,"y":2282},"fighting":{"x":870,"y":2282},"fire":{"x":900,"y":2282},"flying":{"x":930,"y":2282},"ghost":{"x":960,"y":2282},"grass":{"x":990,"y":2282},"ground":{"x":1020,"y":2282},"ice":{"x":1050,"y":2282},"normal":{"x":1080,"y":2282},"poison":{"x":1110,"y":2282},"psychic":{"x":1140,"y":2282},"rock":{"x":1170,"y":2282},"steel":{"x":1200,"y":2282},"water":{"x":1230,"y":2282}},"valuable-item":{"balm-mushroom":{"x":0,"y":2312},"big-mushroom":{"x":30,"y":2312},"big-nugget":{"x":60,"y":2312},"big-pearl":{"x":90,"y":2312},"comet-shard":{"x":120,"y":2312},"nugget":{"x":150,"y":2312},"pearl-string":{"x":180,"y":2312},"pearl":{"x":210,"y":2312},"pretty-wing":{"x":240,"y":2312},"rare-bone":{"x":270,"y":2312},"relic-band":{"x":300,"y":2312},"relic-copper":{"x":330,"y":2312},"relic-crown":{"x":360,"y":2312},"relic-gold":{"x":390,"y":2312},"relic-silver":{"x":420,"y":2312},"relic-statue":{"x":450,"y":2312},"relic-vase":{"x":480,"y":2312},"shoal-salt":{"x":510,"y":2312},"shoal-shell":{"x":540,"y":2312},"slowpoke-tail":{"x":570,"y":2312},"star-piece":{"x":600,"y":2312},"stardust":{"x":630,"y":2312},"tiny-mushroom":{"x":660,"y":2312}},"wonder-launcher":{"ability-urge":{"x":690,"y":2312},"antidote":{"x":720,"y":2312},"awakening":{"x":750,"y":2312},"burn-heal":{"x":780,"y":2312},"dire-hit-1":{"x":810,"y":2312},"dire-hit-2":{"x":840,"y":2312},"dire-hit-3":{"x":870,"y":2312},"ether":{"x":900,"y":2312},"full-heal":{"x":930,"y":2312},"full-restore":{"x":960,"y":2312},"guard-spec":{"x":990,"y":2312},"hyper-potion":{"x":1020,"y":2312},"ice-heal":{"x":1050,"y":2312},"item-drop":{"x":1080,"y":2312},"item-urge":{"x":1110,"y":2312},"max-potion":{"x":1140,"y":2312},"max-revive":{"x":1170,"y":2312},"paralyze-heal":{"x":1200,"y":2312},"potion":{"x":1230,"y":2312},"reset-urge":{"x":0,"y":2342},"revive":{"x":30,"y":2342},"super-potion":{"x":60,"y":2342},"x-accuracy-1":{"x":90,"y":2342},"x-accuracy-2":{"x":120,"y":2342},"x-accuracy-3":{"x":150,"y":2342},"x-accuracy-6":{"x":180,"y":2342},"x-attack-1":{"x":210,"y":2342},"x-attack-2":{"x":240,"y":2342},"x-attack-3":{"x":270,"y":2342},"x-attack-6":{"x":300,"y":2342},"x-defense-1":{"x":330,"y":2342},"x-defense-2":{"x":360,"y":2342},"x-defense-3":{"x":390,"y":2342},"x-defense-6":{"x":420,"y":2342},"x-sp-atk-1":{"x":450,"y":2342},"x-sp-atk-2":{"x":480,"y":2342},"x-sp-atk-3":{"x":510,"y":2342},"x-sp-atk-6":{"x":540,"y":2342},"x-sp-def-1":{"x":570,"y":2342},"x-sp-def-2":{"x":600,"y":2342},"x-sp-def-3":{"x":630,"y":2342},"x-sp-def-6":{"x":660,"y":2342},"x-speed-1":{"x":690,"y":2342},"x-speed-2":{"x":720,"y":2342},"x-speed-3":{"x":750,"y":2342},"x-speed-6":{"x":780,"y":2342}},"status":{"holding-item":{"x":882,"y":2342},"pentagon":{"x":892,"y":2342},"pokerus-cured":{"x":902,"y":2342},"shiny":{"x":912,"y":2342}}}; 
  
  /**
   * Index linking Pokédex numbers to slugs. Generated on runtime.
   *
   * @type {?Object}
   */
  var pkmn_idx_to_slug;
  
  /**
   * Regular Expression used to check whether an identifier
   * is a valid dex number.
   *
   * @type {?RegExp}
   */
  var numeric_regexp;
  
  /**
   * Schedules the DOM to be processed completely as soon as it's ready.
   */ 
  self["process_dom"] = function()
  {
    self.content_loaded(window, self.process_container);
  }
  
  /**
   * Decorates a list of objects.
   *
   * This is to be called by the user in case they want to decorate
   * specific items without having the script scan the DOM.
   *
   * The argument must either be an ID string (in which case the node
   * is fetched using document.getElementById()), or a node, or
   * an array of ID strings, or an array of nodes.
   *
   * @param {(string|Element|Array.<string, Element>)} val Item or items to be decorated.
   */
  self["decorate"] = function(val)
  {
    // Determine what the user passed.
    var is_arr = self.is_array(val);
    // If it's not an array, turn it into one so we can iterate over it.
    if (is_arr == false) {
      val = [val];
    }
    
    var a, z;
    var obj, node, is_str, is_node;
    for (a = 0, z = val.length; a < z; ++a) {
      obj = val[a];
      is_str = typeof obj == "string" || obj instanceof String;
      is_node = obj.nodeName !== null;
      
      // Fetch the object by its ID if necessary.
      if (is_str) {
        node = document.getElementById(obj);
      }
      else {
        node = obj;
      }
      
      // We either have a parent object that contains icons,
      // or an icon itself.
      if (self.has_class(node, self.PKSPR_BASE_CLASS)) {
        // It's an icon.
        self.decorate_node(node);
      }
      else {
        // It's a parent object.
        self.process_container(null, node);
      }
    }
  }
  
  /**
   * Puts a message in the console in case of decoration failure.
   *
   * @param {Object} attrs The icon attributes.
   */
  self.decoration_error = function(attrs)
  {
    window.console && console.warn("Couldn't decorate icon with the "+
      "following properties: %o", attrs);
  }
  
  /**
   * Decorates a single node
   *
   * @param {Element} node The node to be decorated.
   * @return {boolean} Whether decoration was successful.
   */
  self.decorate_node = function(node)
  {
    // Check to make sure it hasn't been decorated before.
    if (self.is_decorated(node)) {
      return false;
    }
    
    // Get the node's base attributes.
    var attrs = self.get_node_attrs(node);
    var size = self.get_type_size(attrs.type);
    var data = self.get_icon_data(attrs);
    var coords = data.coords;
    var props = data.props;
    
    // If we were not able to gauge its size from the type,
    // that means this icon's size is stored alongside
    // the coordinate data.
    var custom_size = size == null || size.x == null;
    
    // Check whether this node's icon really exists.
    if (coords == null) {
      // If not, error out.
      self.decoration_error(attrs);
      return false;
    }
    if (custom_size) {
      size = {"w": coords.w, "h": coords.h};
    }
    
    // Create the inner element that is the icon itself.
    var inner = self.create_inner_node(node);
    // Set background coordinates.
    self.set_icon_coords(inner, coords);
    // Set the size, if we're dealing with a custom sized icon.
    if (custom_size) {
      self.set_icon_size(node, inner, size);
    }
    // Flip the icon if we're showing a faux right-facing icon.
    if (props.flipped) {
      self.set_icon_direction(node, "right");
    }
    
    // Indicate that this node has been decorated so we don't
    // accidentally decorate it twice.
    self.set_decorated(node);
    
    return true;
  }
  
  /**
   * Adds a class to the icon signifying it is to be mirrored in CSS.
   *
   * @param {Element} node The icon node.
   * @param {string} dir Direction the icon should face.
   */
  self.set_icon_direction = function(node, dir)
  {
    self.add_class(node, "pkspr-faux-"+dir);
  }
  
  /**
   * Creates the inner node, which is an extra child element inside the
   * icon node that contains the actual icon itself.
   *
   * @param {Element} node The icon node.
   * @return {Element} The newly created inner node.
   */
  self.create_inner_node = function(node)
  {
    var inner = document.createElement("i");
    node.appendChild(inner);
    return inner;
  }
  
  /**
   * Sets the background-position value of an icon.
   *
   * @param {Element} inner The inner node (<i> element of the icon object).
   * @param {!Object} coords The coordinates.
   */
  self.set_icon_coords = function(inner, coords)
  {
    inner.style.backgroundPosition = (-coords.x)+"px "+(-coords.y)+"px";
  }
  
  /**
   * Sets the size value of an icon.
   *
   * @param {Element} node The outer node.
   * @param {Element} inner The inner node (<i> element of the icon object).
   * @param {Object} size The size.
   */
  self.set_icon_size = function(node, inner, size)
  {
    node.style.width = (size.w)+"px";
    node.style.height = (size.h)+"px";
    inner.style.width = (size.w)+"px";
    inner.style.height = (size.h)+"px";
  }
  
  /**
   * Returns the coordinates and other properties for the icon.
   *
   * @param {Object} attrs The icon's list of attributes.
   * @return {?Object} The icon's coordinates and properties.
   */
  self.get_icon_data = function(attrs)
  {
    var tree = self.PKSPR_DATA;
    var branch;
    
    // The following list contains fallbacks. If a certain form
    // or variation is not found in the coordinates list, it will
    // either fall back to something from this list, or return an error.
    var attr, val, fbval;
    var fallbacks = {
      "type": null,
      "slug": null,
      "form": ".",
      "gender": ".",
      "color": "regular"
    };
    var props = {
      "flipped": attrs.dir === 'right'
    };
    
    for (attr in fallbacks) {
      // Check if we've reached an end node and quit iterating if so.
      if (tree.x >= 0) {
        break;
      }
      
      val = attrs[attr];
      fbval = fallbacks[attr];
      
      // If the value exists in the tree, continue via that branch.
      if (branch = tree[val]) {
        tree = branch;
        continue;
      }
      // If not, continue via the fallback value.
      else
      if (branch = tree[fbval]) {
        tree = branch;
        // If we're reverting from a non-existent right-facing icon,
        // keep note that this icon should be flipped later.
        if (val == "right") {
          props.flipped = true;
        }
        continue;
      }
      // If the fallback value doesn't exist, error out.
      else {
        tree = null;
        break;
      }
    }
    
    // If all went well, we'll have the coordinates and other properties.
    return {
      coords: tree,
      props: props
    };
  }
  
  /**
   * Returns information about the icon type.
   *
   * @param {string} type The type to retrieve information from.
   * @return {?Object} The type's information.
   */
  self.get_type_size = function(type)
  {
    var spr_type;
    for (spr_type in self.PKSPR_TYPES) {
      if (spr_type == type) {
        return self.PKSPR_TYPES[spr_type];
      }
    }
    return null;
  }
  
  /**
   * Retrieves icon type information from a node's class.
   *
   * @param {Element} node The node to be scanned.
   * @return {?Object} The node's information.
   */
  self.get_node_attrs = function(node)
  {
    // The node's class.
    var node_class = node.className;
    if (node_class == null) {
      return null;
    }
    
    var node_attrs = {
      "type": null,   // e.g. pkmn
      "slug": null,   // e.g. unown
      "color": null,  // regular or shiny
      "form": null,   // e.g. defense, a, exclamation, orange
      "gender": null, // male, female or genderless
      "dir": null     // left or right
    };
    
    // Aside from these basic variables, we'll also scan for
    // every known icon type. We'll register the type and
    // redirect the values to the appropriate keys.
    var spr_type;
    for (spr_type in self.PKSPR_TYPES) {
      // The key goes to "type", the value to "slug".
      // e.g. pkmn-caterpie yields type: pkmn, slug: caterpie.
      node_attrs[spr_type] = {"k": "type", "v": "slug"};
    }
    
    var a, z;
    var var_idx, var_mapping, var_key, var_val;
    var bit, bits = node_class.split(" ");
    for (a = 0, z = bits.length; a < z; ++a) {
      bit = bits[a];
      // Iterate over all recognized variable types.
      for (var_key in node_attrs) {
        var_mapping = node_attrs[var_key];
        var_idx = bit.indexOf(var_key+"-");
        if (var_idx == 0) {
          var_val = bit.substring(var_key.length + 1);
          
          if (var_mapping === null) {
            // Color, form, gender and dir are saved to
            // the node_attrs variable directly.
            node_attrs[var_key] = var_val;
          }
          else {
            node_attrs[var_mapping['k']] = var_key;
            node_attrs[var_mapping['v']] = var_val;
          }
        }
      }
    }
    
    // Check to see if this is a Pokémon icon that uses the number
    // as the identifier rather than the slug.
    if (node_attrs.type == "pkmn"
    &&  self.is_numeric_pkmn(node_attrs.slug)) {
      // Replace the index number with the slug.
      node_attrs.slug = pkmn_idx_to_slug[node_attrs.slug];
    }
    
    // Clean the output up a bit.
    for (spr_type in self.PKSPR_TYPES) {
      delete node_attrs[spr_type];
    }
    
    return node_attrs;
  }
  
  /**
   * Compiles a regular expression for use by PkSpr.is_numeric_pkmn().
   */
  self.prepare_numeric_check = function()
  {
    if (numeric_regexp != undefined) {
      return;
    }
    // 000 is always false.
    numeric_regexp = new RegExp(/(?!000)^[0-9]{3}$/);
  }
  
  /**
   * Generates a list of Pokédex numbers linked to their respective slugs.
   */
  self.generate_idx_list = function()
  {
    var a, z, pkmn;
    
    if (pkmn_idx_to_slug != undefined) {
      return;
    }
    pkmn_idx_to_slug = {};
    
    // In case we don't have any Pokémon icons in this compile.
    if (self.PKSPR_DATA == null
    ||  self.PKSPR_DATA.pkmn == null) {
      return;
    }
    
    pkmn = Object.keys(self.PKSPR_DATA.pkmn);
    for (a = 1, z = pkmn.length; a <= z; ++a) {
      // Fast zero-padding hardcoded to work for 3 digits.
      pkmn_idx_to_slug[("000"+a).slice(-3)] = pkmn[a - 1];
    }
  }
  
  /**
   * Determines whether a Pokémon identifier is a dex number or not.
   *
   * @param {?string} pkmn The Pokémon identifier (slug or ID).
   * @return {boolean} Whether it is or isn't a numeric identifier.
   */
  self.is_numeric_pkmn = function(pkmn)
  {
    return numeric_regexp.test(pkmn);
  }
  
  /**
   * Determines whether something is an array.
   *
   * @param {?} something The object.
   * @return {boolean} Whether the object is an array.
   */
  self.is_array = function(something)
  {
    return toString.call(something) === "[object Array]";
  }
  
  /**
   * Decorates all icons found in the parent object.
   *
   * If decorating the entire DOM (document as parent object),
   * this function should be run as a callback from PkSpr.content_loaded().
   *
   * @param {*} caller Calling object (if callback).
   * @param {HTMLDocument|Element} parent Parent object.
   */
  self.process_container = function(caller, parent)
  {
    if (parent == null) {
      parent = document;
    }
    
    var a;
    var elements = self.get_icon_elements(parent);
    for (a = 0; a < elements.length; ++a) {
      self.decorate_node(elements[a]);
    }
  }
  
  /**
   * Retrieves all elements in the DOM that can be decorated.
   *
   * @param {HTMLDocument|Element} parent The parent element to search in.
   */
  self.get_icon_elements = function(parent)
  {
    if (parent == null) {
      parent = document;
    }
    
    // We'll attempt to use document.querySelectorAll() first.
    // If it's not available, we'll do our own check.
    try {
      return parent.querySelectorAll(
        "span."+self.PKSPR_BASE_CLASS+","+
        "div."+self.PKSPR_BASE_CLASS
      );
    }
    catch(e) {}
    
    // Can't use document.querySelectorAll(), so we'll do this
    // the hard way. Grab all elements of those types and check for the
    // base identifier class.
    var a, b;
    var result, results, elements = [];
    var types = ["span", "div"];
    for (a = 0; a < types.length; ++a) {
      results = parent.getElementsByTagName(types[a]);
      for (b = 0; b < results.length; ++b) {
        result = results[b];
        if (self.has_class(result, self.PKSPR_BASE_CLASS)) {
          elements.push(result);
        }
      }
    }
    return elements;
  }
  
  /**
   * Checks if an DOM element has already been decorated before.
   *
   * @param {Element} element The element to check.
   * @return {boolean} Whether the element has been decorated.
   */
  self.is_decorated = function(element)
  {
    return self.has_class(element, self.PKSPR_BASE_CLASS+"-decorated");
  }
  
  /**
   * Adds a class to an item that indicates it has been decorated already.
   *
   * @param {Element} element The element to set.
   */
  self.set_decorated = function(element)
  {
    self.add_class(element, " "+self.PKSPR_BASE_CLASS+"-decorated");
  }
  
  /**
   * Adds a class to a DOM element.
   *
   * @param {Element} element The element to add a class to.
   * @param {string} cls The class name to add.
   */
  self.add_class = function(element, cls)
  {
    element.className += " "+cls;
  }
  
  /**
   * Checks if an DOM element has a specific class.
   *
   * @param {Element} element The element to check.
   * @param {string} cls The class name to check for.
   * @return {boolean} Whether the element has the class.
   */
  self.has_class = function(element, cls)
  {
    return (" "+element.className+" ").indexOf(" "+cls+" ") > -1;
  }
  
  /**
   * Cross-browser DOMContentLoaded wrapper (version 1.2)
   *
   * Takes a window object and function; the function is executed after
   * DOM is loaded and ready, regardless of the browser used.
   * 
   * Written by Diego Perini <diego.perini@gmail.com> and released under
   * the MIT license. Slightly modified for this project. For more
   * information, see <https://github.com/dperini/ContentLoaded>.
   *
   * @param {Window} win Window object.
   * @param {function(...)} fn Function to execute.
   */
  self.content_loaded = function(win, fn)
  {
    var done = false, top = true,
  
    doc = win.document, root = doc.documentElement,
  
    add = doc.addEventListener ? "addEventListener" : "attachEvent",
    rem = doc.addEventListener ? "removeEventListener" : "detachEvent",
    pre = doc.addEventListener ? "" : "on",
  
    init = function(e)
    {
      if (e.type == "readystatechange" && doc.readyState != "complete") {
        return;
      }
      (e.type == "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        fn.call(win, e.type || e);
      }
    },
  
    poll = function()
    {
      try {
        root.doScroll("left");
      }
      catch(e) {
        setTimeout(poll, 50); return;
      }
      init("poll");
    };
  
    if (doc.readyState == "complete") {
      fn.call(win, "lazy");
    }
    else {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        }
        catch(e) {
        }
        if (top) {
          poll();
        }
      }
      doc[add](pre+"DOMContentLoaded", init, false);
      doc[add](pre+"readystatechange", init, false);
      win[add](pre+"load", init, false);
    }
  }
  
  /**
   * Runs a couple of initialization functions.
   */
  self.initialize = function()
  {
    // Compile our numeric check regular expression.
    self.prepare_numeric_check();
    // Generate a list of slugs by Pokédex number.
    self.generate_idx_list();
  }()
  
  return self;
})();


/**
 * Object.keys() prototype method polyfill (simplified).
 *
 * For compatibility purposes, we'll define a polyfill so older browsers
 * won't choke on Object.keys(), which the code requires.
 *
 * Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys>
 */
if (!Object.keys) {
  Object.keys = (function()
  {
    "use strict";
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    
    return function(obj)
    {
      if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
        throw new TypeError("Object.keys called on non-object");
      }
      
      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }
      
      return result;
    };
  }());
}

/* All done. */
})();