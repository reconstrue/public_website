import React from "react";
import Layout from "../components/layout";

/*
TODO:
import SEO from "../components/seo"
 */

const AboutPage = () => (
  <Layout>
    <div>
      <h1>About</h1>

      <p>
        Reconstrue started as the passion project of a single software
        developer. Basically, "I'm not a neuroscientist but I dabble as one on the
        internet." The neuroscientific questions persued in Reconstrue provide
        a focus for spare time open source development energies -- energies which
        were previously spent without a unifying theme. 
      </p>
      <p>
        Reconstrue can be thought of as "a D&R outfit for neuroscience."
        The reversal of the common "R&D" phrase to "D&R" is meant to imply that the
        project is firstly a software <b>D</b>evelopment effort which,
        secondarily, uses the tools developed to perform neuroscientific <b>R</b>esearch.
        In this way, to use an old software idiom, Reconstrue eats its own dogfood. 
      </p>

      <p>  
        In other words, That is, specific 
        neuroscietific open questions drive which the tool development and those
        tools are then applied to open experimental data.
        
        
        about producing software (the development part) and secondarily using those tools to do
        neuroscientific research, alone and in collaboration with scientists. Reconstrue does not have
        
        is about open source development and research
        for neuroscience.  
      </p>
      <p>
        Reconstrue is motivated by a combination of two factors:
        <ol>
          <li>Simple fascination with neuroscience. Is there any greater intellectual mystery?</li>
          <li>The realization that big neuroscience has very interesting software problems.</li>
        </ol>
      </p>

      
      {/*
      <p>
        There is a single goal driving all of the software developemnt:
        search for evidence of <a href='http://williamcalvin.com/bk9/'>Calvin's Darwin Machine Theory</a>, 
        but the tools are designed to be repurposable
        for other neuroscience projects. DMT caused the initiation of this project and also provides the
        forcing function for committing to software development: if coding something up doesn't move
        towards proving DMT, it's not part of Reconstrue.

        DTM is so core to this project that even the logo is a visual reference to the theory.
      </p>
      
      <p>
        All three blend (<b>TODO:</b> maybe a venn diagram?)
      </p>
      
      <p>
        Neuroscience
        <ul>
          <li>Structural pattern recognition</li>
          <li>Functional pattern recognition</li>
        </ul>
      </p>
      
      <p>
        Computer Science
        <ul>
          <li>High dimensional data visualization (t-SNE, UMAP, etc)</li>
        </ul>
      </p>
      <p>
        Computer Engineering
        <ul>
          <li>Cuboid repository</li>
          <li>Data wrangling on the petascale</li>
        </ul>
      </p>


      <div>
        <h2>Origins</h2>
      </div>
      
      <p>
        From programmer's perspective, software problems can be interesting in two dimensions:
        <ol>
          <li>Science: Raw computer science problems i.e. algorithm innovations and machine learning</li>
          <li>Engineering:</li>
        </ol>
        Combine these two motivaiton with the movement in the neuroscience
        community towards open data and open source code and there is a novel
        situation where software developer can dabble with massive amounts of
        raw data.      
        </p> 
        <p>
          To riff off an old meme: "may not be a neuroscientist PhD but play one on the interwebz." 
          <a href='https://en.wikipedia.org/wiki/On_the_Internet,_nobody_knows_you%27re_a_dog'>not a dog</a>
        </p>
       */}

      <div>
        <h2>Origins</h2>
        <p>
          The Reconstrue project is the effor of a single programmer, John Tigue,
          with almost zero formal education in biology and neuroscience.
          The extent of my "formal training" was a few weeks of organic chemistry
          ("No fun. Fuck this hazing bullshit.") and an Introduction to Brains
          class. The latter was great fun but pretty much all that stuck was the idea cortical columns.
        </p>
        <p>
          A few years later while browsing through the University of
          Washington's <a href="https://www.ubookstore.com/">University Book Store</a>,
          I stubled upon a copy of book by a UW professor, William Calvin.
          I had previously read human evolution articles written by Calvin which I had found most intriguing.
          The book was <a href="http://williamcalvin.com/bk9/">The Cerebral Code</a>
          and it presented a theory of consciousness involving cortical columns. Fascinated, I bought it.
          I still have that copy which is now heavily battered after many rereadings and annotations.
          That is what caused the Reconstrue project.
          </p>
          
          <p>
            
            In the mid 2000's decade, Calvin was a guest on a UW radio talk show on KUOW.
            I wrote in to ask if neuroscience had advanced far enough to prove his theory and he chucked, "No."
          </p>

        <p>
          Then in 2018 I learned of the Allen Institute for Brain Science in Seattle and that outsiders were
          welcome
        </p>
      </div>
      

    </div>
  </Layout>
);

export default AboutPage
