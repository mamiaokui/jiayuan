function foo()
{
    var ele = document.createElement("script")
    ele.innerText = "function foo1(){window.open('','_self','');window.close();} setTimeout(foo1, 3000)"
    document.body.appendChild(ele);
}
foo();
