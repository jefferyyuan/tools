# change this if the delimiter is not .
delimiter = ".";
selected = editor.getSelText();

reversed = delimiter.join(selected.split('.')[::-1]);
#console.write(reversed + "\r\n");

editor.replaceSel(reversed);

# types.core.services.projecta.codeexample.com
# com.codeexample.projecta.services.core.types







