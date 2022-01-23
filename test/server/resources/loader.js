var xhr = new XMLHttpRequest;

xhr.onreadystatechange = function(){
    if (xhr.readyState !== 4)
        return;

    document.body.textContent = xhr.responseText;
};

xhr.open('GET', 'resources/data.txt');
xhr.send();
