import { useCallback, useEffect, useState } from 'react';
import Submit from '../../Atoms/SubmitButton/Submit';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import "./Filter.css"
import { useTranslation } from 'react-i18next';
import { AdvData, filterByCategory } from '../../../storesData/products';

type CheckedState = {
    vehicles: boolean;
    tech: boolean;
    home: boolean;
    clothes: boolean;
    animals: boolean;
};

type Props = {
    ads: AdvData[]
    onClick: (filtered: AdvData[]) => void
    onClear: (used: boolean) => void
}

export default function CategoryFilter({ ads, onClick, onClear }: Props) {
    const { t } = useTranslation();
    const [isChecked, setIsChecked] = useState<CheckedState>({
        vehicles: false,
        tech: false,
        home: false,
        clothes: false,
        animals: false,
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
            vehicles: false,
            tech: false,
            home: false,
            clothes: false,
            animals: false,
        });
        setFiltered([])
        onClear(false)
    }, [])

    return (
        <fieldset className="filter">
            <h4>{t('category-filter.title')}</h4>
            <Checkbox label={t('category-filter.vehicles')} id="vehicles" checked={isChecked.vehicles} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.tech')} id="tech" checked={isChecked.tech} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.clothes')} id="clothes" checked={isChecked.clothes} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.home')} id="home" checked={isChecked.home} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.animals')} id="animals" checked={isChecked.animals} onChange={handleOptionChange} />
            <Submit label={t('buttons.reset')} className='btn--reset' onClick={handleReset} />
        </fieldset>
    )
}
