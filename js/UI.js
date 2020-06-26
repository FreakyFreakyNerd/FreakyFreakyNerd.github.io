notations = {
  "standard": new ADNotations.StandardNotation(),
  "scientific": new ADNotations.ScientificNotation(),
  "engineering": new ADNotations.EngineeringNotation(),
  "mixedscientific": new ADNotations.MixedScientificNotation(),
  "mixedengineering": new ADNotations.MixedEngineeringNotation(),
  "letters": new ADNotations.LettersNotation(),
  "cancer": new ADNotations.CancerNotation(),
  "logarithm": new ADNotations.LogarithmNotation(),
  "brackets": new ADNotations.BracketsNotation(),
  "infinity": new ADNotations.InfinityNotation(),
  "roman": new ADNotations.RomanNotation(),
  "dots": new ADNotations.DotsNotation(),
  "zalgo": new ADNotations.ZalgoNotation(),
  "hex": new ADNotations.HexNotation(),
  "imperial": new ADNotations.ImperialNotation(),
  "clock": new ADNotations.ClockNotation(),
  "prime": new ADNotations.PrimeNotation(),
  "bar": new ADNotations.BarNotation(),
  "shi": new ADNotations.ShiNotation(),
  "blind": new ADNotations.BlindNotation()
  //"all": new ADNotations.ALLNotation()
}

//UI
currentscreen = "quark"
function openscreen(screen){
  console.log(screen);
  document.getElementById(currentscreen + "screen").style.display = "none";
  document.getElementById(screen + "screen").style.display = "block";
  currentscreen = screen;
}

function changeTheme(theme){
    player.options.theme = theme;
    updateTheme();
}
function updateTheme(){
    document.getElementById("stylemanager").href = "styles/" + player.options.theme + ".css";
}

function changeNotation(notation){
    player.options.notation = notation;
    quarkstageproducersapp.$forceUpdate();
}

function updateafterplayer(){
  document.getElementById("notations").value = player.options.notation;
  document.getElementById("themes").value = player.options.theme;
  updateTheme();
}

const ticksperday = settings.tickspersecond*3600*24
const ticksperhour = settings.tickspersecond*3600
const ticksperminute = settings.tickspersecond*60

function formattime(ticks){
  days = Math.floor(ticks/ticksperday);
  remainingticks = ticks - days*ticksperday;
  hours = Math.floor(remainingticks/ticksperhour);
  remainingticks = remainingticks - hours*ticksperhour;
  minutes = Math.floor(remainingticks/ticksperminute);
  remainingticks = remainingticks - minutes*ticksperminute;
  seconds = Math.floor(remainingticks/settings.tickspersecond);
  remainingticks = remainingticks - seconds*settings.tickspersecond;
  return `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds, ${remainingticks} Ticks`
}
