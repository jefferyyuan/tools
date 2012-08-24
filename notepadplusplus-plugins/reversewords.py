# -*- coding: utf-8 -*-
#This notepadd++ plugin will reverse the selected words in Notepad++: such as from £¢types.core.services.projecta.codeexample.com" to "com.codeexample.projecta.services.core.types"

# About how to use python to extend notepad++ function, please refer: 
# http://npppythonscript.sourceforge.net/

# change this if the delimiter is not .
delimiter = ".";
selected = editor.getSelText();

reversed = delimiter.join(selected.split('.')[::-1]);
#console.write(reversed + "\r\n");

editor.replaceSel(reversed);

# types.core.services.projecta.codeexample.com
# com.codeexample.projecta.services.core.types







