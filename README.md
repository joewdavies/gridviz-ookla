# gridviz-ookla

Visualize ookla internet speed open data using gridviz

Using [GridTiler](https://github.com/eurostat/gridtiler) we will convert [ookla open datasets](https://github.com/teamookla/ookla-open-data) into a tiled CSV format ready to be visualized using [gridviz](https://github.com/eurostat/gridviz).


## Step 1: SHP to CSV
First we must convert the ookla shapefiles to CSV.

### Shapefiles:

URL Format: `s3://ookla-open-data/FORMAT/performance/type=TYPE/year=YYYY/quarter=Q/FILENAME`

[type=mobile/year=2023/quarter=3/2023-07-01_performance_mobile_tiles](https://ookla-open-data.s3.amazonaws.com/shapefiles/performance/type=mobile/year=2023/quarter=3/2023-07-01_performance_mobile_tiles.zip)
[type=fixed/year=2023/quarter=3/2023-07-01_performance_fixed_tiles](https://ookla-open-data.s3.amazonaws.com/shapefiles/performance/type=fixed/year=2023/quarter=3/2023-07-01_performance_fixed_tiles.zip)

### Convert to CSV using QGIS

- Add shapefile to map
- reproject to Robinson (EPSG: 54030)
- Calculate new fields for x and y cell coordinates using `x_min( $geometry )` and `y_min( $geometry )` expressions.
- Export > save features as > CSV
- Export xmin ymin and data attributes (e.g. avg_d_kbps)
- Do not export geometry

#### Output format:

Should look something like this

```
avg_d_kbps,x,y
12061,-163.817,71.251
70906,-160.027,70.642
143519,-160.043,70.634
```

## Step 2: Tile CSV using GridTiler
Cell size in Robinson for ookla is 445.645 x, 351 y

Once our data is in a grid.csv file, simply run `gridtiler -i grid.csv -r 350` (350 being the resolution, i.e. the size of each cell) in the folder where the grid.csv file is located to produce the tiled grid in a out/ folder.

Final command: `gridtiler -i grid.csv -r 350 -x -851200 -y 5286400`

For multi-resolution gridded CSVs:

`
gridtiler -i grid.csv -r 1000 -a 1 -o 1000m/
gridtiler -i grid.csv -r 1000 -a 2 -o 2000m/
gridtiler -i grid.csv -r 1000 -a 5 -o 5000m/
gridtiler -i grid.csv -r 1000 -a 10 -o 10000m/
gridtiler -i grid.csv -r 1000 -a 20 -o 20000m/
gridtiler -i grid.csv -r 1000 -a 50 -o 50000m/
gridtiler -i grid.csv -r 1000 -a 100 -o 100000m/
`

-a is the aggregation factor. Meaning that a value of -a 10 is 10 times the size of our original cell size.

## License

[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/)