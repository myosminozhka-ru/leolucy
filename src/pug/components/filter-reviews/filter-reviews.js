const FilterReviews = class FilterReviews {
    constructor() {
        this.classReviews;
        this.listAge = [
            {
                id: 1,
                title: "0-1",
                key: "0-1",
                select: true
            },
            {
                id: 2,
                title: "1-5",
                key: "1-5",
                select: false
            },
            {
                id: 3,
                title: "5-7",
                key: "5-7",
                select: false
            },
            {
                id: 4,
                title: "7-10",
                key: "7-10",
                select: false
            },
            {
                id: 5,
                title: "10-15",
                key: "10-15",
                select: false
            },
            {
                id: 6,
                title: "15+",
                key: "15+",
                select: false
            }
        ];
        this.listFeed = [
            {
                id: 1,
                title: "Сухой",
                key: "dry",
                select: true
            },
            {
                id: 2,
                title: "Влажный",
                key: "wet",
                select: false
            },
            {
                id: 3,
                title: "Комбинированный",
                key: "combined",
                select: false
            },
        ];
        this.selectedAge = this.listAge.filter(item => item.select)[0];
        this.selectedFeed = this.listFeed.filter(item => item.select)[0];
        this.isShowMobileDropdown = false;
        this.filteredList = []
    }

    init(classReviews) {
        this.classReviews = classReviews;
        document.addEventListener('click', (e) => {
            if (!e.composedPath().find(item => item.classList?.contains('filter-reviews__mobile-dropdown') || item.classList?.contains('filter-reviews__btn-transaprent'))) {
                this.hiddenMobileDropdown();
            }
        });
    }

    filterList() {
        this.filteredList = this.classReviews.arrayReviews.filter(item => {
            if (JSON.stringify(item).includes(this.selectedAge.title.replace(/\s/g, '')) && JSON.stringify(item).includes(this.selectedFeed.title.replace(/\s/g, ''))) {
                return item;
            } else {
                return false;
            }
        });
        app.reviews.initSlider();
    }

    onSelectAge(selectItemObj) {
        const findLastActiveItem = this.listAge.find(item => item.select === true);
        findLastActiveItem.select = false;

        this.selectedAge = this.listAge.find(item => item.id === selectItemObj.id);
        this.selectedAge.select = true;
        this.filterList()
    }

    onSelectFeed(selectItemObj) {
        const findLastActiveItem = this.listFeed.find(item => item.select === true);
        findLastActiveItem.select = false;

        this.selectedFeed = this.listFeed.find(item => item.id === selectItemObj.id);
        this.selectedFeed.select = true;
        this.filterList()
    }

    toggleMobileDropdown() {
        this.isShowMobileDropdown = !this.isShowMobileDropdown;
    }

    hiddenMobileDropdown() {
        this.isShowMobileDropdown = false;
    }
}

export default FilterReviews;