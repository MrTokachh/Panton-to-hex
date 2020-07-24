'use strict'

jQuery(document).ready(function () {
  initColor();
  pantoneToHexDrop();
  hexToPantoneDrop();
});

function initColor() {
  $('.colorpick').each(function () {
    $(this).ColorPicker({
      color: '#4E008E',
      flat: true,
      onChange: function (hsb, hex, rgb) {
        var hexS = $(this).closest('.converter').find('.hex');
        $(this).find('.colorpicker_hue div').css('backgroundColor', '#' + hex);
        hexS.val(hex);

        var hexV = hexS.val();
        var p = 16;
        var m = colorMatch(hexV, p);
        var m2 = m[0];

        if (m2 != '') {
          $(this).closest('.converter').find('.pantone').val(m2);
        }
      }
    });
  })
}

function colorMatch(rgb, distance) {
  distance = 16;
  if (!distance) distance = 16;
  var a = new Array();
  var aDisVal = new Array();
  var m = RGB2PMS(rgb);
  if (m != '') {
    a[0] = m;
  }
  var r = parseInt((rgb[0] + rgb[1]), 16);
  var g = parseInt((rgb[2] + rgb[3]), 16);
  var b = parseInt((rgb[4] + rgb[5]), 16);

  for (var i = 0; i < hexArray.length; i++) {
    var rgb1 = hexArray[i];
    var r1 = parseInt((rgb1[0] + rgb1[1]), 16);
    var g1 = parseInt((rgb1[2] + rgb1[3]), 16);
    var b1 = parseInt((rgb1[4] + rgb1[5]), 16);
    aDisVal[i] = Math.sqrt(Math.pow((r - r1), 2) + Math.pow((g - g1), 2) + Math.pow((b - b1), 2));
  }
  for (var i = 0; i < aDisVal.length; i++) {
    if (aDisVal[i] <= distance) {
      if (a.indexOf(pmsArray[i]) == -1) {
        a.push(pmsArray[i]);
      }
    }
  }
  return a;
}

function RGB2PMS(rgb) {
  var i = hexArray.indexOf(rgb);
  if (i >= 0) {
    return pmsArray[i];
  } else {
    return '';
  }
}

function PMS2RGB(pms) {
  var i = pmsArray.indexOf(pms);
  if (i >= 0) {
    return hexArray[i];
  } else {
    return '';
  }
}

function pantoneToHexDrop() {
  $('.pantone').on('change keyup', function () {
    var pantone = $(this).val();
    $(this).closest('.converter').find('.hex').val(hexArray[pmsArray.indexOf(pantone)]);
  });
}

function hexToPantoneDrop() {
  $('.hex').on('change keyup', function () {
    var hex = $(this).val();
    var p = 16;
    var m = colorMatch(hex, p);
    var m2 = m[0];

    $(this).val(hex.replace(/[^a-z0-9]/gi, ''));

    if (m2 != '') {
      $(this).closest('.converter').find('.pantone').val(m2);
    }
  });
}