import { useCallback, useState } from 'react';
import Submit from '../../Atoms/SubmitButton/Submit';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import "./Filter.css"
import { useTranslation } from 'react-i18next';

type CheckedState = {
    vehicles: boolean;
    tech: boolean;
    home: boolean;
    dresses: boolean;
    animals: boolean;
};

export default function CategoryFilter() {
    const { t } = useTranslation();
    const [isChecked, setIsChecked] = useState<CheckedState>({
        vehicles: false,
        tech: false,
        home: false,
        dresses: false,
        animals: false,
    });

    const handleOptionChange = useCallback((id: string, checked: boolean) => {
        setIsChecked({
            ...isChecked,
            [id]: checked,
        });
    }, [isChecked]);

    const handleReset = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsChecked({
            vehicles: false,
            tech: false,
            home: false,
            dresses: false,
            animals: false,
        });
    }, [])

    return (
        <fieldset className="filter">
            <legend>{t('category-filter.title')}</legend>
            <Checkbox label={t('category-filter.vehicles')} id="vehicles" checked={isChecked.vehicles} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.tech')} id="tech" checked={isChecked.tech} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.dresses')} id="dresses" checked={isChecked.dresses} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.house')} id="house" checked={isChecked.home} onChange={handleOptionChange} />
            <Checkbox label={t('category-filter.animals')} id="animals" checked={isChecked.animals} onChange={handleOptionChange} />
            <Submit label={t('buttons.reset')} className='btn--reset' onClick={handleReset} />
        </fieldset>
    )
}
