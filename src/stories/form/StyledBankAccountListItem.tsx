import { BankAccount } from '../../api/definitions/bank-account';
import { Utils } from '../../utils';
import DfxIcon, { IconVariant, IconColors, IconSizes } from '../DfxIcon';
import StyledIconButton from '../StyledIconButton';

export interface StyledBankAccountListItemProps {
  bankAccount: BankAccount;
  onDelete: () => void;
}

export default function StyledBankAccountListItem({ bankAccount, onDelete }: StyledBankAccountListItemProps) {
  const isLabelAvailable = bankAccount.label && bankAccount.label.length > 0;
  return (
    <div className="flex  mb-3 last:mb-0 group justify-between rounded py-1 px-3 hover:bg-dfxGray-400/50 ">
      <div className="flex gap-3">
        <div className="place-self-center">
          <DfxIcon icon={IconVariant.BANK} color={IconColors.BLACK} />
        </div>
        <div className="flex flex-col justify-center h-[42px]">
          {isLabelAvailable && <p className="text-dfxGray-800 text-xs">{bankAccount.label}</p>}
          <p className="text-dfxBlue-800">{Utils.formatIban(bankAccount.iban)}</p>
        </div>
      </div>
      <div className="hidden group-hover:block">
        <StyledIconButton
          icon={IconVariant.DELETE_OUTLINE}
          color={IconColors.RED}
          size={IconSizes.LG}
          onClick={onDelete}
        />
      </div>
    </div>
  );
}
