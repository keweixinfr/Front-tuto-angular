import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as cloud from 'd3-cloud';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit {

  @Input() listWords = [
    "Hello", "world", "normally", "you", "want", "more", "words",
    "than", "this"];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let layout = cloud()
    .size([500, 500])
    .words(this.listWords.map(function(d) {
      return {text: d, size: 10 + Math.random() * 90, test: "haha"};
    }))
    .padding(5)
    .rotate(function() { return 0; })
    .font("Impact")
    .fontSize(function(d: any) { return d.size; })
    .on("end", draw);
    layout.start();

    function draw(words: any) {    
      d3.select(document.querySelector('#word-cloud-container')).append("svg")
          .attr("width", layout.size()[0])
          .attr("height", layout.size()[1])
        .append("g")
          .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
          .data(words)
        .enter().append("text")
          .style("font-size", function(d: any) { return d.size + "px"; })
          .style("font-family", "Impact")
          .attr("text-anchor", "middle")
          .attr("transform", function(d: any) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function(d: any) { return d.text; });
    }
  }
}

