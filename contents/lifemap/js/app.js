$(document).ready(function() {

  var height = $(window).height();

  $('header').height(height);

  window.sr = new scrollReveal();

  $('section').each(function() {
    var height = $(this).height(),
      width = $(this).width(),
      center = width / 2;

    $(this).prepend('<svg width="' + width + '" height="' + height + '"></svg>');

    var svg = d3.select($(this).find('svg')[0]);

    var path = 'M719 0 ' +
      // Staring Point
      'V 50 ' +
      'C ' + center + ' 70, ' + (center + 10) + ' 70, ' + (center + 20) + ' 70 ' +
      // First Curve
      'H 1200 ' +
      'C 1300 70, 1300 310, 1200 310 ' +
      // Second Curve
      'H 200' +
      'C 100 310, 100 540, 200 540' +
      // Ending Point
      'H ' + (center - 20) +
      'C ' + (center) + ' 540, ' + (center) + ' 560, ' + (center) + ' 580 ' +
      'V 580';

    svg.append('path')
      .attr('stroke', 'white')
      .attr('fill', 'transparent')
      .style('stroke-width', 10)
      .attr('d', path);
  });
});
