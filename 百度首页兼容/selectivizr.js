var W3CDOM = (document.createElement() && document.getElementsByTagName());
window.onload = pinballEffect;

function pinballEffect()
{
    if (!W3CDOM) return;
    var allElements = document.getElementsByTagName('*');
    var originalBackgrounds=new Array();
    for (var i=0; i<allElements.length; i++)
    {
        if (allElements[i].className.indexOf('hovereffect') >= 0)
        {
            allElements[i].onmouseover = mouseGoesOver;
            allElements[i].onmouseout = mouseGoesOut;
        }
    }
}

function mouseGoesOver()
{
    originalClassNameString = this.className;
    this.className += " lay-on";
}

function mouseGoesOut()
{
    this.className = originalClassNameString;
}
pinballEffect();