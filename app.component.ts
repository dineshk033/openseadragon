import { Component, OnInit } from '@angular/core';
declare var OpenSeadragon: any;
declare var ChessBoard: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  duomo = {
    Image: {
      xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
      Url: '//openseadragon.github.io/example-images/duomo/duomo_files/',
      Format: 'jpg',
      Overlap: '2',
      TileSize: '256',
      Size: {
        Width: '13920',
        Height: '10200',
      },
    },
  };

  sampletileSource = {
    type: 'image',
    // url:  'https://www.gstatic.com/webp/gallery/3.jpg',
    //  url:"assets/download.png",
    url: 'assets/GettyImages-858637934.jpg',
    Format: 'jpg',
    Overlap: '2',
    TileSize: '256',
    panHorizontal: true,
    panVertical: true,
    showNavigator: true,
  };
  sampletileSource2 = {
    type: 'image',
    // url:  'https://www.gstatic.com/webp/gallery/3.jpg',
    url: 'assets/download.png',
    //url:"assets/GettyImages-858637934.jpg",
    Format: 'png',
    Overlap: '2',
    TileSize: '256',
    panHorizontal: true,
    panVertical: true,
    showNavigator: true,
  };
  sampletileSource3 = {
    type: 'image',
    url: 'https://www.gstatic.com/webp/gallery/3.jpg',
    //url:"assets/download.png",
    //url:"assets/GettyImages-858637934.jpg",
    Format: 'png',
    Overlap: '2',
    TileSize: '256',
    panHorizontal: true,
    panVertical: true,
    showNavigator: true,
  };

  title = 'seaDragonIntegration';
  viewer: any;
  board: any;
  worldmapviewer: any;
  sampleviewer: any;
  imageviewer: any;
  sequenceviewer: any;

  pageSelectedMessage = '';
  pageNumber: number;
  onClickMe(value: number) {
    this.pageNumber = value * 1 + 1;
    this.pageSelectedMessage = 'Page selected is ' + value * 1;
    //this.pageNumber=4;
    this.sequenceviewer.goToPage(value * 1 + 1);
  }

  ngOnInit() {
    this.sequenceviewer = OpenSeadragon({
      id: 'sequence-viewer',
      prefixUrl: '//openseadragon.github.io/openseadragon/images/',
      tileSources: [this.duomo],
    });
  }
}
