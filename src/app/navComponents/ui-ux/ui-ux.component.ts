import { Component, OnInit,ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UIUXComponent implements OnInit {


  public loading = false;
  constructor(private router: Router , private service:CommonServiceService,  private route: ActivatedRoute,
     private elementRef: ElementRef) { }

  public categories = [
    {
      name: 'Web Images',
      images: [
        {
          id: 26,
          path: 'portfolio/website-all-images/Appetiser-app/main.jpg',
          thumbnailImage:'portfolio/website-all-images/Appetiser-app/thumbnail-image-2.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-1.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-2.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-3.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-4.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-5.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-6.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-7.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-8.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-9.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-10.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-11.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-12.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-13.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-14.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-15.png' },
            { detailPathImages: 'portfolio/website-all-images/Appetiser-app/image-16.png' },
          ],
        },
        {
          id: 27,
          path: 'portfolio/website-all-images/space/main.png',
          detailImages: [
            { detailPathImages: 'portfolio/website-all-images/space/image-1.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-2.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-3.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-4.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-5.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-6.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-7.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-8.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-9.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-10.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-11.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-12.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-13.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-14.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-15.png' },
            { detailPathImages: 'portfolio/website-all-images/space/image-16.png' },
          ],
        },
        {
          id: 28,
          path: 'portfolio/website-all-images/sotatek/main.png',
          detailImages: [
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-16.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-2.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-3.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-4.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-5.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-6.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-7.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-8.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-9.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-10.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-11.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-12.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-13.png' },
            { detailPathImages: 'portfolio/website-all-images/sotatek/image-14.png' },
          ],
        },
        {
          id: 29,
          path: 'portfolio/website-all-images/pixelplex/main.png',
          detailImages: [
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-1.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-2.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-3.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-4.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-5.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-6.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-7.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-8.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-9.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-10.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-11.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-12.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-13.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-14.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-15.png' },
            { detailPathImages: 'portfolio/website-all-images/pixelplex/image-16.png' },
          ],
        },
        {
          id: 30,
          path: 'portfolio/website-all-images/goji-lab/main.png',
          detailImages: [
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-1.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-2.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-3.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-4.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-5.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-6.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-7.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-8.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-9.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-10.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-11.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-12.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-13.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-14.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-15.png' },
            { detailPathImages: 'portfolio/website-all-images/goji-lab/image-16.png' },
          ],
        },
        {
          id: 31,
          path: 'portfolio/website-all-images/momentum/main.png',
          detailImages: [
            { detailPathImages: 'portfolio/website-all-images/momentum/image-1.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-2.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-3.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-4.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-5.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-6.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-7.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-8.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-9.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-10.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-11.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-12.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-13.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-14.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-15.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-16.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-17.png' },
            { detailPathImages: 'portfolio/website-all-images/momentum/image-18.png' },
          ],
        },
        {
          id: 32,
          path: 'portfolio/website-all-images/absolute-web/main.png',
          detailImages: [
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-1.png' },
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-2.png' },
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-3.png' },
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-4.png' },
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-5.png' },
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-6.png' },
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-7.png' },
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-8.png' },
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-9.png' },
            { detailPathImages: 'portfolio/website-all-images/absolute-web/image-10.png' },
          ],
        },
        {
          id: 32,
          path: 'portfolio/website-all-images/pinacle-solutions/main.png',
          detailImages: [
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-1.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-2.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-3.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-4.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-5.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-6.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-7.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-8.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-9.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-10.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-11.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-12.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-13.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-14.png' },
            { detailPathImages: 'portfolio/website-all-images/pinacle-solutions/image-15.png' },
          ],
        }

      ],
      categoryHeading: 'Web Images',
    },
    {
      name: 'Mockups',
      images: [
        { id: 33,thumbnailImage:'portfolio/mockups/Absolute-Web-thumbnail.jpg', path: 'portfolio/mockups/absolute-web.jpg' },
        { id: 34,thumbnailImage:'portfolio/mockups/ARNOLD-ANDRE-thumbnail.jpg', path: 'portfolio/mockups/Arnold-andre-2-min.jpg' },
        { id: 35,thumbnailImage:'portfolio/mockups/Dragon-Racing-thumbnail.jpg', path: 'portfolio/mockups/Dragon-racing-3-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/Dubai-Autodrome-thumbnail.jpg', path: 'portfolio/mockups/Dubai-autodrome-4-min.jpg' },
        { id: 37,thumbnailImage:'portfolio/mockups/Frollo-thumbnail.jpg', path: 'portfolio/mockups/Frollo-min.jpg' },
        { id: 38,thumbnailImage:'portfolio/mockups/Montblanc-thumbnail.jpg', path: 'portfolio/mockups/montblanc-min.jpg' },
        { id: 39,thumbnailImage:'portfolio/mockups/Panera-Bread-thumbnail.jpg', path: 'portfolio/mockups/panera-bread-min.jpg' },
        { id: 40,thumbnailImage:'portfolio/mockups/PostMates-thumbnail.jpg', path: 'portfolio/mockups/Postmates-1-min.jpg' },
        { id: 41,thumbnailImage:'portfolio/mockups/Raiz-thumbnail.jpg', path: 'portfolio/mockups/raiz-invest-min.jpg' },
        { id: 42,thumbnailImage:'portfolio/mockups/Appetiser-Apps-thumbnail.jpg', path: 'portfolio/mockups/Appetiser-apps.jpg' },
        { id: 43,thumbnailImage:'portfolio/mockups/BrainHub-Thumbnail.jpg', path: 'portfolio/mockups/brainhub.jpg' },
        { id: 44,thumbnailImage:'portfolio/mockups/Codec-Thumbnail.jpg', path: 'portfolio/mockups/Codec.jpg' },
        { id: 45,thumbnailImage:'portfolio/mockups/codigodelsur-thumbnail.jpg', path: 'portfolio/mockups/Codiigodelsur.jpg' },
        { id: 46,thumbnailImage:'portfolio/mockups/createIT-Thumbnail.jpg', path: 'portfolio/mockups/CreateIT.jpg' },
        { id: 47,thumbnailImage:'portfolio/mockups/DataArt-thumbnail.jpg', path: 'portfolio/mockups/data-art.jpg' },
        { id: 48,thumbnailImage:'portfolio/mockups/defaultvalue-Thumbnail.jpg', path: 'portfolio/mockups/Default-value.jpg' },
        { id: 49,thumbnailImage:'portfolio/mockups/divante-Thumbnail.jpg', path: 'portfolio/mockups/Divante.jpg' },
        { id: 50,thumbnailImage:'portfolio/mockups/fmd-thumbnail.jpg', path: 'portfolio/mockups/FMD.jpg' },
        { id: 51,thumbnailImage:'portfolio/mockups/Frollo-thumbnail.jpg', path: 'portfolio/mockups/Frollo-min.jpg' },
        { id: 52,thumbnailImage:'portfolio/mockups/GojiLabs-thumbnail.jpg', path: 'portfolio/mockups/Goji-labs.jpg' },
        { id: 53,thumbnailImage:'portfolio/mockups/growthlab-thumbnail.jpg', path: 'portfolio/mockups/Growth-lab.jpg' },
        { id: 54,thumbnailImage:'portfolio/mockups/grupa-Thumbnail.jpg', path: 'portfolio/mockups/Grupa-kmk.jpg' },
        { id: 55,thumbnailImage:'portfolio/mockups/investnext-thumbnail.jpg', path: 'portfolio/mockups/investnext-casestudy.jpg' },
        { id: 56,thumbnailImage:'portfolio/mockups/kitameraki-thumbnail.jpg', path: 'portfolio/mockups/kitameraki.jpg' },
        { id: 57,thumbnailImage:'portfolio/mockups/launchboom-thumbnail.jpg', path: 'portfolio/mockups/Launchboom.jpg' },
        { id: 58,thumbnailImage:'portfolio/mockups/lingaro-Thumbnail.jpg', path: 'portfolio/mockups/Lingaro.jpg' },
        { id: 59,thumbnailImage:'portfolio/mockups/lonely-planet-thumbnail.jpg', path: 'portfolio/mockups/Lonelyplanet.jpg' },
        { id: 60,thumbnailImage:'portfolio/mockups/Memory-Squared.jpg', path: 'portfolio/mockups/Memory.jpg' },
        { id: 61,thumbnailImage:'portfolio/mockups/momentum-thumbnail.jpg', path: 'portfolio/mockups/momentum.jpg' },
        { id: 62,thumbnailImage:'portfolio/mockups/parkhill-thumbnail.jpg', path: 'portfolio/mockups/Parkhill.jpg' },
        { id: 63,thumbnailImage:'portfolio/mockups/Pinnacle-thumbnail.jpg', path: 'portfolio/mockups/Pinaccle.jpg' },
        { id: 64,thumbnailImage:'portfolio/mockups/Pixelplex-thumbnail.jpg', path: 'portfolio/mockups/Pixel-plex.jpg' },
        { id: 65,thumbnailImage:'portfolio/mockups/socialdriver-Thumbnail.jpg', path: 'portfolio/mockups/Social-Driver-min.jpg' },
        { id: 66,thumbnailImage:'portfolio/mockups/socialfix-Thumbnail.jpg', path: 'portfolio/mockups/socialfix.jpg' },
        { id: 67,thumbnailImage:'portfolio/mockups/soda-digital-thumbnail.jpg', path: 'portfolio/mockups/soda-digital.jpg' },
        { id: 68,thumbnailImage:'portfolio/mockups/stotek-thumbnail.jpg', path: 'portfolio/mockups/sotatek.jpg' },
        { id: 69,thumbnailImage:'portfolio/mockups/SPACEDEV-thumbnail.jpg', path: 'portfolio/mockups/Space.jpg' },
        { id: 70,thumbnailImage:'portfolio/mockups/stratagem-thumbnail.jpg', path: 'portfolio/mockups/stratagem.jpg' },
        { id: 71,thumbnailImage:'portfolio/mockups/sungroup-Thumbnail.jpg', path: 'portfolio/mockups/Sun-o-group.jpg' },
        { id: 72,thumbnailImage:'portfolio/mockups/thumbnail-waymax.jpg', path: 'portfolio/mockups/Waymark.jpg' },
        { id: 73,thumbnailImage:'portfolio/mockups/webisoft-thumbnail.jpg', path: 'portfolio/mockups/webisoft.jpg' },
      ],
      categoryHeading: 'Mockups',
    }
  ];

  currentCategory: any = this.categories[0];
  name: string = `${this.categories[0].name}`;
  select(selectVal: string) {
    for (let i = 0; i < this.categories.length; i++) {
      let token = this.categories[i].name.includes(selectVal)
      if (token === true) {
        this.showCategory(this.categories[i])
      }
    }
  }
  ngOnInit(): void {
    const savedCategory = this.categories.find(category => category.categoryHeading === this.service.currentCategoryHeading);
    if(savedCategory){
      this.showCategory(savedCategory);
    }
  }
  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      const selectedItemId = params['selectedItemId']; 
      if (selectedItemId) {
        const element = this.elementRef.nativeElement.querySelector('#portfolioItem-' + selectedItemId);
         const url = `/#/UI/UX`;
         history.pushState(null, '', url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          element.classList.add('active');
          setTimeout(() => {
            element.classList.remove('active');
          }, 2000);
        }
      }
    });
     
  }

  showCategory(category: any) {
    this.loading = true;
    this.currentCategory = category;
    this.service.currentCategoryHeading = category.categoryHeading
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  gotoDetails(image: any, i:any) {
    const id = image.id;
    const detailImages = image.detailImages;
    const bgImage = image.path;
    const selected = {
      ...image,
      category: this.currentCategory.images,
      index: i 
    };
    this.router.navigate(['portfolioDetails', id], {
      state: {
        images: detailImages,
        bgImage,
        selected
      },
    });
  }
  
  public  goback(): void {
    this.router.navigate(['portfolio']);
  }

}
