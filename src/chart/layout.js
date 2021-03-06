/*------------------------------------------------------------------------------------------------\
  Generate HTML containers.
\------------------------------------------------------------------------------------------------*/

export function layout() {
    var wrapper = this.wrap
        .append('div')
        .attr('class', 'aeTable row-fluid')
        .append('div')
        .attr('class', 'table-wrapper');
    wrapper.append('div').attr('class', 'controls form-inline row-fluid');
    wrapper.append('div').attr('class', 'SummaryTable');
    if (this.config.validation)
        this.wrap
            .append('a')
            .attr({
                id: 'downloadCSV'
            })
            .text('Download Summarized Data');
}
