function detectIE() {
     
    try {
 
        var isIE = false || !!document.documentMode;
 
        if ( ! isIE ) {
            if ( navigator.userAgent.indexOf("MSIE") > 0 ) {
                return true;    
            } else {
                return false;
            }
        }
        
        return true;
        
    } catch(e) {
        
        var error = e.toString();
        
        console.log(error);
    }
};
if(detectIE() == true){
    alert("Browser Not Supported, Some Features Might not work well properly")
}