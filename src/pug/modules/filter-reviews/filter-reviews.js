const FilterReviews = class FilterReviews {
    constructor() {
        this.listAge = [
            {
                id: 1,
                title: "0 - 1",
                key: "0 - 1",
                select: true
            },
            {
                id: 2,
                title: "1 - 5",
                key: "1 - 5",
                select: false
            },
            {
                id: 3,
                title: "5 - 7",
                key: "5 - 7",
                select: false
            },
            {
                id: 4,
                title: "7 - 10",
                key: "7 - 10",
                select: false
            },
            {
                id: 5,
                title: "10 - 15",
                key: "10 - 15",
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
        this.isShowMobileDropdown = false;
    }

    init() {}

    onSelectAge(selectItemObj) {
        const findLastActiveItem = this.listAge.find(item => item.select === true);
        findLastActiveItem.select = false;

        const findNewActiveItem = this.listAge.find(item => item.id === selectItemObj.id);
        findNewActiveItem.select = true;
    }

    onSelectFeed(selectItemObj) {
        const findLastActiveItem = this.listFeed.find(item => item.select === true);
        findLastActiveItem.select = false;

        const findNewActiveItem = this.listFeed.find(item => item.id === selectItemObj.id);
        findNewActiveItem.select = true;
    }

    toggleMobileDropdown() {
        this.isShowMobileDropdown = !this.isShowMobileDropdown;
    }
}

export default FilterReviews;