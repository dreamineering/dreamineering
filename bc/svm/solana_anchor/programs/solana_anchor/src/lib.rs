use anchor_lang::prelude::*;

declare_id!("CNmwVydeTHYEgvFoUNBQB5kr5CxgHP8Pnqpwead2GCi9");

#[program]
pub mod solana_anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
