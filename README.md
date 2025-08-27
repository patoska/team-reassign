# Team Reassign

Team Re-Assignment node script that redistribute a pool of players in new teams.

## Run instructions

If you have docker compose you can simply run something like this:

```bash
TEAMS=3 SEED=43 docker compose run --rm team-reassignment
```

Or if you have a node enviroment running then you can run:
```bash
npm start -- --teams 3 --seed 3
```

## Approach
I picked current_total_points an sort players in descending order, then I start addind players to the different groups.

## Modeling choice
* In terms of data modeling I just use json like object generated after CSV reading
* In terms of the code I tryed to follow a javascript module so it can be used in different scenarios

## Tradeoffs
* I used the data as it was in the CSV file, so memory was not considered  
* No time complexity analysis was considered  
* I did not keep track of teams current_total_points, that way it could be a litle bit more even  

## With more time
* Instead of adding players in descendant current_total_points order, I could descide base on current team current_total_points.
* I would also have chosen a different deterministic approach.

## Time spent
Initial hour: 10:46  
End hour: 13:17  
Total 2 hours and 31 minutes.  

Reading time was included, also some breaks

## AI prompts

```bash
javascript read data from a csv file
```
```bash
javascript async await
```
```bash
javascript sort object array by parse integer property
```
```bash
javascript random integer between two numbers
```
