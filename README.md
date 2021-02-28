You can view the work in: https://arg-viz-saitejavishalj.netlify.app/

# Argumentative Vis

Created a pair of data visualizations that promote opposing viewpoints using the same base dataset.

Completed submission should have the following files:
* `index.html`: The webpage with the visualizations.
* `data/`: The folder containing your dataset file(s).
* Any other necessary files like CSS, JS, etc.

## Design requirements

Using techniques from the storytelling concept, created two visualizations about a dataset that frame the data with opposite narratives.

First, found a dataset about a "controversial" topic. In other words, a topic with strong opinions on both sides of the issue. Here are some examples of topics that could work: a political issue, science, religion, sociocultural, economics, immigration, sports, climate change, geopolitical sovereignty, etc. Topics from other regions or countries are also considered. Pleases searched for the data include Kaggle and news organizations that provide access to their data (538, New York Times, etc.).

This topic is NOT allowed: **COVID-19**. Though, you are free to look at examples of opposing COVID visualizations for inspiration.

Next, created `index.html` page with two visualizations placed side-by-side (one on the left, one on the right). The two visualizations should use the same dataset. Not all attributes are required to be the the same, and preprocessed the data differently for each visualization (if desired), including aggregating data, filtering data, etc. but used the same source. (In other words, did not use two datasts and did not merge them together.) One visualization is rhetorically framed to argue "in support" of a viewpoint, and the other visualization is rhetorically framed to argue against the viewpoint.

Again, the trick is that i utilized the _same dataset_ for both visualizations. Used rhetorical techniques to frame the data in opposing ways. Some examples of this include: filtering some of the data, picking different attributes to show, using diffrent ranges (timescales, etc), using different granularities, clustering or binning the data, using text annotating on the charts, picking colors or channels to emphasize some aspect of the data. Allowed to pre-process the data or break up the data into multiple files if necessary. 

[This paper on visualization rhetoric](http://users.eecs.northwestern.edu/~jhullman/vis_rhetoric.pdf) provides an extensive collection of framing and styling techniques I refered to use to help frame a visualization to promote a specific viewpoint, story, or argument. Framed it like a debate: one team argues the affirmative position, while the other argues the negative. For this work, I argued both sides. 

Above the charts, added a title describing the debate topic, and provided a link to the dataset source. At the bottom of each chart, provided a brief caption about each chart. Then, below that, provided the following paragraphs.

* Introduce the topic: Provide a brief (3-4 sentence) description of the chosen topic.
* Left chart: Describe the position of the left chart, and describe the rhetorical techniques you are using in this chart. I explicitly referenced techniques from the paper.
* Right chart: Provided a similar writeup for the right chart.
