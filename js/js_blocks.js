/**
 * Created by Bomberus on 28.03.2016.
 */
Blockly.Python['input'] = function(block) {
    // Null data type.
    return 'haloo';
};

Blockly.Python['input_list'] = function(block) {
    var statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = statements_name;
    return code;
};