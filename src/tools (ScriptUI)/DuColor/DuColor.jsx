/*
	DuColor

	Copyright (c) 2019 Nicolas Dufresne, Rainbox Productions

	https://rainboxprod.coop

	This file is part of DuColor.

		DuColor is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		DuColor is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with DuColor. If not, see <http://www.gnu.org/licenses/>.

*/

(function(obj)
{
	//=========================
	var version = '0.0.1';
    var scriptName = "DuColor";
    var updateServer = 'rainboxprod.net';
    var updateFeed = 'wp/category/updates/feed/';
    var downloadURL = "http://rainboxprod.coop";
	//=========================

	#include DuAEF.jsxinc
    #include DuColor_shared.jsxinc

	//============= INIT ==============

	//UI
	//main palette
	var ui_mainPalette = DuAEF.DuScriptUI.createUI(obj,scriptName, ['fill','fill']);

	//this file
	var thisScriptFile = new File($.fileName);

    #include DuColor_init.jsxinc
    #include DuColor_ui.jsxinc

    DuAEF.DuScriptUI.showUI(ui_mainPalette);

})(this);
