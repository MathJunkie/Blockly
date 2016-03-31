/**
 * Created by Bomberus on 28.03.2016.
 */
Blockly.Python['input_list'] = function(block) {
    var statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '@interact\n';
    statements_name = statements_name.replace("  ,","");
    code += 'def _('+statements_name+'):\n';
    return code;
};

Blockly.Python['input_vector'] = function(block) {
    var text_titel = block.getFieldValue('titel');
    var variable_vektor = Blockly.Python.variableDB_.getName(block.getFieldValue('Vektor'), Blockly.Variables.NAME_TYPE);
    var text_grad = block.getFieldValue('grad');
    // TODO: Assemble Python into code variable.
    var default_text = 'default=[[';
    for (var i = 0; i < text_grad; i++) {
        default_text += i;
        if (i + 1 < text_grad)
            default_text += ',';
    }
    default_text += ']]';
        var code = ','+variable_vektor+"=('"+text_titel+"',input_grid(1,"+text_grad+","+default_text+",to_value=lambda x: vector(flatten(x))))";
    return code;
};

Blockly.Python['input_matrix'] = function(block) {
    var text_titel = block.getFieldValue('titel');
    var variable_matrix = Blockly.Python.variableDB_.getName(block.getFieldValue('Matrix'), Blockly.Variables.NAME_TYPE);
    var text_grad = block.getFieldValue('grad');
    // TODO: Assemble Python into code variable.
    var code = ','+variable_matrix+"=('"+text_titel+"', identity_matrix("+text_grad+"))";
    return code;
};

Blockly.Python['input_text'] = function(block) {
    var text_titel = block.getFieldValue('titel');
    var variable_textbox = Blockly.Python.variableDB_.getName(block.getFieldValue('Textbox'), Blockly.Variables.NAME_TYPE);
    var text_grad = block.getFieldValue('grad');
    // TODO: Assemble Python into code variable.
    var code = ','+variable_textbox+"=input_box(width="+text_grad+",label='"+text_titel+"')";
    return code;
};

Blockly.Python['input_rangeslider'] = function(block) {
    var text_titel = block.getFieldValue('titel');
    var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var text_min = block.getFieldValue('min');
    var text_max = block.getFieldValue('max');
    var text_step = block.getFieldValue('step');
    var code = ','+variable_var+"=('"+text_titel+"',range_slider("+text_min+','+
                                             text_max+','+
                                             text_step + "))";
    return code;
};

Blockly.Python['input_slider'] = function(block) {
    var text_titel = block.getFieldValue('titel');
    var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var text_min = block.getFieldValue('min');
    var text_max = block.getFieldValue('max');
    var text_step = block.getFieldValue('step');
    // TODO: Assemble Python into code variable.
    var code = ','+variable_var+"=('"+text_titel+"',slider("+text_min+','+
                                       text_max+','+
                                       text_step + "))";
    return code;
};

Blockly.Python['input_colorbox'] = function(block) {
    var text_titel = block.getFieldValue('titel');
    var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = ','+variable_var+"=checkbox(True, label='"+text_titel+"')";
    return code;
};

Blockly.Python['input_checkbox'] = function(block) {
    var text_titel = block.getFieldValue('titel');
    var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = ','+variable_var+"=color_selector(widget='colorpicker', label='"+text_titel+"')";
    return code;
};


Blockly.Python['statement_list'] = function(block) {
        var statements_name = Blockly.Python.statementToCode(block, 'NAME');
        // TODO: Assemble Python into code variable.
        var code = statements_name;
        return code;
    };

Blockly.Python['text_print'] = function(block) {
    var value_print = Blockly.Python.valueToCode(block, 'print', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'print '+value_print+'\n';
    return code;
};

Blockly.Python['variable_get'] = function(block) {
    var variable_out = Blockly.Python.variableDB_.getName(block.getFieldValue('out'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_out;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
};