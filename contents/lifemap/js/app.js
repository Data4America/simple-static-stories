$(document).ready(function() {

  var height = $(window).height();

  $('header').height(height);

  window.sr = new scrollReveal();

  $('.lf-timeline:not(.final)').each(function() {
    var height = $(this).outerHeight(),
      width = $(this).outerWidth(),
      center = width / 2;

    $(this).prepend('<svg width="' + width + '" height="' + height + '"></svg>');

    var svg = d3.select($(this).find('svg')[0]);

    var right = true;
    var top = $(this).find('.column.grid:eq(0)').position().top - 20;
    var path = 'M' + center + ' 0 ' +
      // Staring Point
      'V 50 ' +
      'C ' + center + ' ' + top + ', ' + (center + 20) + ' ' + top + ', ' + (center + 40) + ' ' + top + ' ';

    var $grids = $(this).find('.column.grid');
    $(this).find('.column.grid').each(function(i) {
      top = $(this).position().top;

      var x = $(this).position().left;
      if (right) {
        x += $(this).width();
      }

      var gHeight = $(this).height();
      var margin = ($(this).outerHeight(true) - gHeight) / 2;
      var y = top + gHeight + margin;

      var curve = (gHeight + margin) / 2;
      path += 'H ' + x;
      path += 'C ' + (x + (right ? curve : -curve)) + ' ' + (top - 10) + ',' +
        (x + (right ? curve : -curve)) + ' ' + y + ', ' +
        x + ' ' + y + ' ';

      if (i === $grids.length - 1) {
        path += 'H ' + (center + (right ? 40 : -40)) + ' ';
        path += 'C ' + center + ' ' + (height - 55) + ', ' +
          center + ' ' + (height - 20) + ', ' +
          center + ' ' + height + ' ';
      }

      right = right ? false : true;
    });

    svg.append('path')
      .attr('stroke', 'white')
      .attr('fill', 'transparent')
      .style('stroke-width', 6)
      .style('opacity', 0.6)
      .attr('d', path);
  });
});
