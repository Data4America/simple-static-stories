---
title: The Geography of American Jobs
author: robert-manduca
date: 2015-09-11
template: article.jade
code: https://github.com/Data4America/jobmaps
data: http://datahub.io/dataset/where-are-the-jobs
---

The latest employment numbers show that non-farm employment in America increased [by 173,000](http://www.bls.gov/news.release/pdf/empsit.pdf).


The America economy is now host to [142,288,000 jobs](https://research.stlouisfed.org/fred2/series/PAYEMS/).

That’s a lot of jobs! But where are these jobs located, exactly?

This data visualization from Harvard PhD student Robert Manduca plots one dot for every job in the United States.

The LEHD data is based on state unemployment insurance records, and tabulates the count of jobs by census block.

<span class="more"></span>

![](https://cdn-images-1.medium.com/max/718/1*WiyPlDVIeaUiOVwH35QNLw.png)

Here, jobs are colored by type, allowing us to see how different industries and sectors exhibit different spatial patterns — some clustering in downtowns, others spreading across city and suburbs alike.

**One Dot = One Job**

<span style="color: firebrick">**Red dot**</span>: Manufacturing and Logistics job  
<span style="color: royalblue">**Blue dot**</span>: Professional Services job  
<span style="color: seagreen">**Green dot**</span>: Healthcare, Education, and Government job  
<span style="color: orange">**Yellow dot**</span>: Retail, Hospitality, and Other Services job

See the full data visualization at http://www.robertmanduca.com/projects/jobs.html

---

Each city in the United States has its own unique geography of employment, both in terms of the industries it specializes in and where its jobs tend to locate. In New York City, shown above, professional services, healthcare, and government jobs are concentrated in Manhattan, while manufacturing and logistics jobs are in the outer boroughs. The Los Angeles economy, in contrast, has a much larger presence of manufacturing and logistics jobs, and service jobs aren’t as concentrated — there are several medium-sized clusters in downtown LA, Pasadena, Glendale, Hollywood, and the Westside:

![](https://cdn-images-1.medium.com/max/718/1*Kjdzb7c4dFcxmhCUR-brfw.png)

---

Knowing what’s where is crucial for informed policymaking — good urban policy isn’t one size fits all. That said, there are some general patterns that stand out across multiple cities. First, in many cities jobs are relatively concentrated — much more concentrated than residences. Most cities retain a lot of jobs downtown, even after fifty years of employment suburbanization. We can see this in New York and even LA, but it’s perhaps most striking in Chicago, where the Loop continues to dominate employment for the whole region:

![](https://cdn-images-1.medium.com/max/718/1*PqxhdW-I3pzJKucYCKAedQ.png)

---

Where employment has suburbanized, it appears to have clustered in certain districts or along certain transportation corridors. In Dallas, there is a good deal of suburban employment but much of it is concentrated along Highway 75, the Dallas North Tollway, I-35 E, and Highway 114:

![](https://cdn-images-1.medium.com/max/718/1*mEW3V8ck1JJEriUyxsGNmA.png)

---

Anchor institutions — large employers tied to a specific geography, like hospitals and universities — are also clearly visible in many cities. In Cleveland, for example, there is a cluster of green healthcare and education jobs a few miles east of downtown that is centered on Case Western Reserve University, Cleveland, Clinic, and the Louis Stokes VA Medical Center:

![](https://cdn-images-1.medium.com/max/718/1*chPgNLl1_6xCfvLO-9WoYA.png)

Anchor institutions like these are important to economic developers because they tend to be stable sources of jobs and demand for local services that are unlikely to close down or depart a city during an economic downturn.

---

Most cities have a mix of the four employment types identified — manufacturing and logistics; professional services; health care, education, and government; and retail, hospitality, and other services — but the exact distribution varies quite a bit. Los Angeles has an abundance of manufacturing and logistics, while Washington DC is weighted towards government. Las Vegas is clearly dominated by hospitality:

![](https://cdn-images-1.medium.com/max/718/1*kZ4D42I73K2y5nTqXTObTA.png)

---

Finally, Miami offers an example of how the geography of employment differs by sector. Blue professional service jobs are concentrated in downtown Miami and in downtown Coral Gables a few miles west. Red manufacturing and logistics jobs are found in the Port of Miami and by the airport. There is a concentration of yellow hospitality jobs in Miami Beach, along with scattered retail. Finally, dense green squares mostly representing hospitals are sprinkled throughout the metro area.

![](https://cdn-images-1.medium.com/max/640/1*yUZriNeNAKAJ4IIv2VHhrw.png)

---

**See the Full Data Viz**: http://www.robertmanduca.com/projects/jobs.html

**Data viz inspired by**: The methodology used by Dustin Cable to create [the US Racial Dot Map](http://demographics.coopercenter.org/DotMap/index.html).

# Methodology

This map is based on the counts of jobs by industry and census block given in the Workplace Area Characteristics (WAC) files of the LEHD data. Within each census block, I randomly plotted one dot per job, color-coding based on North American Industry Classification System (NAICS) code into four categories:

* <span style="color: firebrick">**Red**</span> — Manufacturing and Logistics: NAICS codes 11 (Agriculture and Forestry), 21 (Mining), 22 (Utilities), 23 (Construction), 31–33 (Manufacturing), 42 (Wholesale Trade), 48–49 (Transportation and Warehousing)

* <span style="color: royalblue">**Blue**</span> — Professional Services: NAICS codes 51 (Information), 52 (Finance and Insurance), 53 (Real Estate), 54 (Professional, Scientific, and Technical Services), 55 (Management of Companies and Enterprises)

* <span style="color: seagreen">**Green**</span> — Healthcare, Education, and Government: NAICS codes 61 (Educational Services), 62 (Health Care), 81 (Other Services — largely Religious, Grantmaking, Civic, Professional, and Similar Organizations)

* <span style="color: orange">**Yellow**</span> — Retail, Hospitality, and Other Services: NAICS codes 44–45 (Retail Trade), 56 (Administrative and Support Services), 71 (Arts, Entertainment, and Recreation — largely Amusement, Gambling, and Recreation), 72 (Accommodation and Food Services)

**Notes:** This dataset is extremely detailed and extensive, but it does have some quirks. First, data for Massachusetts is not yet available (although the state Office of Labor and Workforce Development is working on it). Second, in some cases employers with multiple branches may fail to specify which workers work at which branches. This is most notable with certain state and local government agencies. Third, some federal government jobs, mostly having to do with national security, are omitted.

**Original Data Sources:**

* [US Census Bureau LEHD Origin-Destination Employment Statistics Worker Area Characteristics files](http://lehd.ces.census.gov/data/#lodes)

* [US Census Bureau Tiger Line Census Block shapefiles](https://www.census.gov/geo/maps-data/data/tiger-line.html)
