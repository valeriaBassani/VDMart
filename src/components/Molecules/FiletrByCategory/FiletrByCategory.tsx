import { useCallback, useEffect, useState } from 'react';
import Submit from '../../Atoms/SubmitButton/Submit';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import "./Filter.css"
import { useTranslation } from 'react-i18next';
import { AdvData, filterByCategory } from '../../../storesData/products';

type CheckedState = {
    Vehicles: boolean;
    Tech: boolean;
    House: boolean;
    Clothing: boolean;
    Animals: boolean;
};

type Props = {
    ads: AdvData[]
    onClick: (filtered: AdvData[]) => void
    onClear: (used: boolean) => void
}

export default function CategoryFilter({ ads, onClick, onClear }: Props) {
    const { t } = useTranslation();
    const [isChecked, setIsChecked] = useState<CheckedState>({
        Vehicles: false,
        Tech: false,
        House: false,
        Clothing: false,
        Animals: false,
    });

    const [filtered, setFiltered] = useState<AdvData[]>([])
    const isAnyFilterActive = Object.values(isChecked).some(value => value);

    const handleOptionChange = useCallback(async (id: string, checked: boolean) => {
        setIsChecked({
            ...isChecked,
            [id]: checked,
        });
        setFiltered(await filterByCategory(filtered, id, checked))
    }, [filtered, isChecked]);

    useEffect(() => {
        onClick(filtered);
        onClear(isAnyFilterActive);
    }, [filtered, onClick, isAnyFilterActive]);

    const handleReset = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsChecked({
            Vehicles: false,
            Tech: false,
            House: false,
            Clothing: false,
            Animals: false,
        });
        setFiltered([])
        onClear(false)
    }, [])

    return (
        <fieldset className="filter">
            <legend>{t('category-filter.title')}</legend>
            <Checkbox label={t('category-filter.vehicles')} id="Vehicles" checked={isChecked.Vehicles} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.tech')} id="Tech" checked={isChecked.Tech} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.dresses')} id="Clothing" checked={isChecked.Clothing} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.house')} id="House" checked={isChecked.House} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.animals')} id="Animals" checked={isChecked.Animals} onChange={handleOptionChange} />
            <Submit label={t('buttons.reset')} className='btn--reset' onClick={handleReset} />
        </fieldset>
    )
}
