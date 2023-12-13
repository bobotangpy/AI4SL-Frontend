import React, { useRef, useEffect } from "react";

const { tableau } = window;

function Tableau() {
    const vizRef = useRef(null);
  
    // const url = "https://public.tableau.com/shared/789GCN242";
    const url = "https://public.tableau.com/views/concated_version/Dashboard1";
 
    const options = {
        device: "desktop",
    };

    useEffect(() => {
        let viz = null;

        function initViz() {
            viz = new tableau.Viz(vizRef.current, url, options);
        }

        function cleanupViz() {
            if (viz) {
                viz.dispose();
                viz = null;
            }
        }

        initViz(); // Initialize the Tableau viz

        return () => {
            cleanupViz(); // Clean up the Tableau viz on component unmount
        };
    }, []);

    return (
        <div style={{padding: "8px 20px"}}>
            <div ref={vizRef}></div>
        </div>
    );
}

export default Tableau;
