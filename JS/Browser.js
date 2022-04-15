function myFunction23() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
    alert('Opera');
    }
    else if(navigator.userAgent.indexOf("Edg") != -1 )
    {
    alert('Edge');
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
    alert('Chrome');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
    alert('Firefox');
    }
    else 
    {
    alert('unknown');
    }
    }