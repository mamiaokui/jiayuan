window.localStorage.clear();

document.body.girlNum                                     = 300;   //how many girl you want to collect.
document.body.openGirlTime                                = 3000;  //how much time you want to open a girl window
document.body.needsOpenWindow                             = 3;  //if needs open girl window, result will not be saved.




document.body.index = 0;
function foo()
{
    if (!document.body.needsOpenWindow)
    {
        var result = "";
        for (var i = 0; i < localStorage.length; i++)
        {
            result += localStorage.key(i) + ",";
        }
        window.localStorage.clear();
        window.localStorage.result = result;
        return;
    }
    else
    {
        for (var i = 0; i < document.body.needsOpenWindow; i++)
            window.open("http://www.jiayuan.com/"+localStorage.key(document.body.index), '_blank', 'width=100,height=100');
        document.body.index++;
        if (document.body.index >= document.body.girlNum)
            return;
        else
            setTimeout(foo, document.body.openGirlTime);    
    }
}


    var scriptEle = document.createElement("script");
    scriptEle.innerText =   "\
    function saveId() {   \
        \
        var reg = /[0-9]+/;   \
        var ele = document.getElementsByClassName(\"openBox\");   \
        if (ele.length == 0)   \
        {   \
            setTimeout(saveId, 3000)   \
        } \
        else   \
        { \
            console.log(\"begin add \" + ele.length);\
            for (var i = 0; i < ele.length; i++)   \
            {   \
                window.localStorage.setItem(reg.exec(ele[i].href)[0], 1) \
            } \
             \
            if (window.localStorage.length > document.body.girlNum)  \
            {  \
               foo();  \
               return;  \
            }   \
        }   \
        \
        window.getSearchResult('next');   \
        setTimeout(saveId, 3000);   \
    }\
\
\
    setTimeout(saveId, 3000);   \
"      

document.body.appendChild(scriptEle);
