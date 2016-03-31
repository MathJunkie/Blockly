/**
 * Created by Bomberus on 28.03.2016.
 */
'use strict';

goog.provide('Blockly.Blocks.input');

goog.require('Blockly.Blocks');

Blockly.Blocks.input.HUE = 210;

//Input_Vektor (grad)
Blockly.Blocks['input_vector'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Vektor")
            .appendField(new Blockly.FieldVariable("v"), "Vektor")
            .appendField("mit")
            .appendField(new Blockly.FieldTextInput("2"), "grad")
            .appendField("Feldern");
        this.appendDummyInput()
            .appendField("Titel: ")
            .appendField(new Blockly.FieldTextInput("Titel"), "titel");
        this.setPreviousStatement(true, "Input");
        this.setNextStatement(true, "Input");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Input_Matrix (grad)
Blockly.Blocks['input_matrix'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Matrix")
            .appendField(new Blockly.FieldVariable("m"), "Matrix")
            .appendField("mit")
            .appendField(new Blockly.FieldTextInput("3"), "grad")
            .appendField("Feldern");
        this.appendDummyInput()
            .appendField("Titel: ")
            .appendField(new Blockly.FieldTextInput("Titel"), "titel");
        this.setPreviousStatement(true, "Input");
        this.setNextStatement(true, "Input");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Input_Textbox (width)
Blockly.Blocks['input_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Textbox")
            .appendField(new Blockly.FieldVariable("text"), "Textbox")
            .appendField("mit")
            .appendField(new Blockly.FieldTextInput("30"), "grad")
            .appendField("px Weite");
        this.appendDummyInput()
            .appendField("Titel: ")
            .appendField(new Blockly.FieldTextInput("Titel"), "titel");
        this.setPreviousStatement(true, "Input");
        this.setNextStatement(true, "Input");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Input_RangeSlider (min,max,step,[min,max])
Blockly.Blocks['input_rangeslider'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Range Slider")
            .appendField(new Blockly.FieldVariable("rangeslider"), "var");
        this.appendDummyInput()
            .appendField("min:")
            .appendField(new Blockly.FieldTextInput("1"), "min")
            .appendField("max:")
            .appendField(new Blockly.FieldTextInput("10"), "max")
            .appendField("step:")
            .appendField(new Blockly.FieldTextInput("1"), "step");
        this.appendDummyInput()
            .appendField("Titel: ")
            .appendField(new Blockly.FieldTextInput("Titel"), "titel");
        this.setPreviousStatement(true, "Input");
        this.setNextStatement(true, "Input");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Input_slider (min,max,step,initial)
Blockly.Blocks['input_slider'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Slider")
            .appendField(new Blockly.FieldVariable("slider"), "var");
        this.appendDummyInput()
            .appendField("min:")
            .appendField(new Blockly.FieldTextInput("1"), "min")
            .appendField("max:")
            .appendField(new Blockly.FieldTextInput("10"), "max")
            .appendField("step:")
            .appendField(new Blockly.FieldTextInput("1"), "step");
        this.appendDummyInput()
            .appendField("Titel: ")
            .appendField(new Blockly.FieldTextInput("Titel"), "titel");
        this.setPreviousStatement(true, "Input");
        this.setNextStatement(true, "Input");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Input_color_selector
Blockly.Blocks['input_colorbox'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Colorbox")
            .appendField(new Blockly.FieldVariable("colorbox"), "var");
        this.appendDummyInput()
            .appendField("Titel: ")
            .appendField(new Blockly.FieldTextInput("Titel"), "titel");
        this.setPreviousStatement(true, "Input");
        this.setNextStatement(true, "Input");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Input_checkbox
Blockly.Blocks['input_checkbox'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Checkbox")
            .appendField(new Blockly.FieldVariable("checkbox"), "var");
        this.appendDummyInput()
            .appendField("Titel: ")
            .appendField(new Blockly.FieldTextInput("Titel"), "titel");
        this.setPreviousStatement(true, "Input");
        this.setNextStatement(true, "Input");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['input_list'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck('Input')
            .appendField("Dynamische Eingaben");
        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['statement_list'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .appendField("Ausführung");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['variable_get'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("out"), "out");
        this.setOutput(true, null);
        this.setTooltip('');
        this.setColour(20);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['text_print'] = {
    init: function() {
        this.appendValueInput("print")
            .setCheck(null)
            .appendField("Print");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};