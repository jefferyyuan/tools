# -*- coding: utf-8 -*-
#This notepadd++ plugin will convert the selected text from SBC to DBC cases in Notepad++: such as from ＂ｈｅｌｌｏ　ｗｏｒｌｄ＂to "hello world" 全角转半角
# For more information, please refer: https://plus.google.com/101157854606139706613/posts/68pAvApmZ34

# About how to use python to extend notepad++ function, please refer: 
# http://npppythonscript.sourceforge.net/
def SBCToDBC(ustring):
    '''From http://bbs.chinaunix.net/thread-1762033-1-1.html'''
    result = ''
    for uchar in ustring:
        inside_code = ord(uchar)
        if inside_code == 12288:
            inside_code = ' ';
        elif not inside_code in range(32, 127):
            inside_code -= 65248;            
        if inside_code in range(32, 127):
            result += unichr(inside_code).encode('utf-8', 'ignore');
        else:
            result +=uchar;                    
    return result.encode('utf-8', 'ignore');

selected = editor.getSelText().decode('utf8');
reversed = SBCToDBC(selected) 
editor.replaceSel(reversed);