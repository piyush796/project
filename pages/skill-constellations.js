import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function SkillConstellations() {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 600)
      .attr('height', 400)
      .style('background', '#111');

    const skills = [
      { id: 'React' },
      { id: 'Node.js' },
      { id: 'Python' },
      { id: 'Django' },
      { id: 'TensorFlow' }
    ];
    const links = [
      { source: 'React', target: 'Node.js' },
      { source: 'Python', target: 'Django' },
      { source: 'Python', target: 'TensorFlow' }
    ];

    const simulation = d3.forceSimulation(skills)
      .force('link', d3.forceLink(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(300, 200));

    const link = svg.append('g').selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#888')
      .attr('stroke-width', 1.5);

    const node = svg.append('g').selectAll('circle')
      .data(skills)
      .enter().append('circle')
      .attr('r', 20)
      .attr('fill', 'purple')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    const label = svg.append('g').selectAll('text')
      .data(skills)
      .enter().append('text')
      .text(d => d.id)
      .attr('fill', '#fff')
      .attr('font-size', 12)
      .attr('text-anchor', 'middle')
      .attr('dy', 4);

    simulation.on('tick', () => {
      link.attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

      node.attr('cx', d => d.x)
          .attr('cy', d => d.y);

      label.attr('x', d => d.x)
           .attr('y', d => d.y);
    });

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x; d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x; d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null; d.fy = null;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Skill Constellations</h1>
      <svg ref={ref}></svg>
    </div>
  );
}