window.BENCHMARK_DATA = {
  "lastUpdate": 1681367317544,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "51dfc21a6b04ab2184fbfaa40eb26a9dae87de92",
          "message": "Fixed tests",
          "timestamp": "2023-04-13T15:02:17+09:00",
          "tree_id": "e43cc05b11d1f369aa309d83d657bf0db17a5cc8",
          "url": "https://github.com/greymistcube/libplanet/commit/51dfc21a6b04ab2184fbfaa40eb26a9dae87de92"
        },
        "date": 1681366932035,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1711259.1836734693,
            "unit": "ns",
            "range": "± 163940.77937351275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3239430.1075268816,
            "unit": "ns",
            "range": "± 252174.60125569065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617470.9677419355,
            "unit": "ns",
            "range": "± 162215.57086351185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7424411.111111111,
            "unit": "ns",
            "range": "± 552343.9777649817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61258.163265306124,
            "unit": "ns",
            "range": "± 9823.301495003065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8837436.170212766,
            "unit": "ns",
            "range": "± 513234.7032431966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23870648.611111112,
            "unit": "ns",
            "range": "± 1175856.13544585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60594155.2631579,
            "unit": "ns",
            "range": "± 1345635.5844291097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124196744.44444445,
            "unit": "ns",
            "range": "± 2199792.4999664165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245229553.33333334,
            "unit": "ns",
            "range": "± 2738129.072108145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6031910.15625,
            "unit": "ns",
            "range": "± 71923.18952033801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957780.078125,
            "unit": "ns",
            "range": "± 10352.543339269314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439002.1614583333,
            "unit": "ns",
            "range": "± 25719.232227930752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3123929.3229166665,
            "unit": "ns",
            "range": "± 35510.454132515166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011524.5042067308,
            "unit": "ns",
            "range": "± 10803.050633080558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929402.2526041666,
            "unit": "ns",
            "range": "± 7768.515021219368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3812064.935064935,
            "unit": "ns",
            "range": "± 193764.7174486528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4014550,
            "unit": "ns",
            "range": "± 313647.15307424514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5448697.777777778,
            "unit": "ns",
            "range": "± 356175.4059031689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4835903.296703297,
            "unit": "ns",
            "range": "± 281928.58924460894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9138732.608695652,
            "unit": "ns",
            "range": "± 514840.36213706835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 381168.2926829268,
            "unit": "ns",
            "range": "± 20217.70937464785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308610.989010989,
            "unit": "ns",
            "range": "± 20897.514209161345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252657.77777777778,
            "unit": "ns",
            "range": "± 14816.184422749968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6449711.363636363,
            "unit": "ns",
            "range": "± 240529.93645902156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4510303.157894737,
            "unit": "ns",
            "range": "± 275242.9346505156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24698.96907216495,
            "unit": "ns",
            "range": "± 6745.793362739738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103203.1914893617,
            "unit": "ns",
            "range": "± 11369.431305016831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97696.8085106383,
            "unit": "ns",
            "range": "± 12673.632369877569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129794.62365591398,
            "unit": "ns",
            "range": "± 16511.05930812408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11137,
            "unit": "ns",
            "range": "± 5454.821886934697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23778.78787878788,
            "unit": "ns",
            "range": "± 5661.222784322227"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "51dfc21a6b04ab2184fbfaa40eb26a9dae87de92",
          "message": "Fixed tests",
          "timestamp": "2023-04-13T15:02:17+09:00",
          "tree_id": "e43cc05b11d1f369aa309d83d657bf0db17a5cc8",
          "url": "https://github.com/greymistcube/libplanet/commit/51dfc21a6b04ab2184fbfaa40eb26a9dae87de92"
        },
        "date": 1681366932035,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1711259.1836734693,
            "unit": "ns",
            "range": "± 163940.77937351275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3239430.1075268816,
            "unit": "ns",
            "range": "± 252174.60125569065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617470.9677419355,
            "unit": "ns",
            "range": "± 162215.57086351185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7424411.111111111,
            "unit": "ns",
            "range": "± 552343.9777649817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61258.163265306124,
            "unit": "ns",
            "range": "± 9823.301495003065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8837436.170212766,
            "unit": "ns",
            "range": "± 513234.7032431966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23870648.611111112,
            "unit": "ns",
            "range": "± 1175856.13544585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60594155.2631579,
            "unit": "ns",
            "range": "± 1345635.5844291097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124196744.44444445,
            "unit": "ns",
            "range": "± 2199792.4999664165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245229553.33333334,
            "unit": "ns",
            "range": "± 2738129.072108145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6031910.15625,
            "unit": "ns",
            "range": "± 71923.18952033801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957780.078125,
            "unit": "ns",
            "range": "± 10352.543339269314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439002.1614583333,
            "unit": "ns",
            "range": "± 25719.232227930752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3123929.3229166665,
            "unit": "ns",
            "range": "± 35510.454132515166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011524.5042067308,
            "unit": "ns",
            "range": "± 10803.050633080558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929402.2526041666,
            "unit": "ns",
            "range": "± 7768.515021219368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3812064.935064935,
            "unit": "ns",
            "range": "± 193764.7174486528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4014550,
            "unit": "ns",
            "range": "± 313647.15307424514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5448697.777777778,
            "unit": "ns",
            "range": "± 356175.4059031689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4835903.296703297,
            "unit": "ns",
            "range": "± 281928.58924460894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9138732.608695652,
            "unit": "ns",
            "range": "± 514840.36213706835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 381168.2926829268,
            "unit": "ns",
            "range": "± 20217.70937464785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308610.989010989,
            "unit": "ns",
            "range": "± 20897.514209161345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252657.77777777778,
            "unit": "ns",
            "range": "± 14816.184422749968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6449711.363636363,
            "unit": "ns",
            "range": "± 240529.93645902156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4510303.157894737,
            "unit": "ns",
            "range": "± 275242.9346505156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24698.96907216495,
            "unit": "ns",
            "range": "± 6745.793362739738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103203.1914893617,
            "unit": "ns",
            "range": "± 11369.431305016831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97696.8085106383,
            "unit": "ns",
            "range": "± 12673.632369877569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129794.62365591398,
            "unit": "ns",
            "range": "± 16511.05930812408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11137,
            "unit": "ns",
            "range": "± 5454.821886934697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23778.78787878788,
            "unit": "ns",
            "range": "± 5661.222784322227"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "0ef3738ad8ffc1b75e1a21ea1ea2340406b9e50c",
          "message": "Fixed tests",
          "timestamp": "2023-04-13T15:05:46+09:00",
          "tree_id": "76239a8c7da7fb35e196c51fb924344225f6d6c6",
          "url": "https://github.com/greymistcube/libplanet/commit/0ef3738ad8ffc1b75e1a21ea1ea2340406b9e50c"
        },
        "date": 1681367291202,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618991.7525773195,
            "unit": "ns",
            "range": "± 132636.1821158596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2941333.3333333335,
            "unit": "ns",
            "range": "± 115165.13275040516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619783.505154639,
            "unit": "ns",
            "range": "± 190056.30617465073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6517707.142857143,
            "unit": "ns",
            "range": "± 419373.26981221593"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56892.63157894737,
            "unit": "ns",
            "range": "± 4746.134868775768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8484530,
            "unit": "ns",
            "range": "± 392464.0662402802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22901895.454545453,
            "unit": "ns",
            "range": "± 542156.4459481386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58123100,
            "unit": "ns",
            "range": "± 1170875.0711421873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115067840,
            "unit": "ns",
            "range": "± 1971572.2278715242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230728804.76190478,
            "unit": "ns",
            "range": "± 5444172.936312383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5669301.822916667,
            "unit": "ns",
            "range": "± 70873.30603975053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1948776.4322916667,
            "unit": "ns",
            "range": "± 23488.462745318324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381361.4583333333,
            "unit": "ns",
            "range": "± 16207.663599402142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3121019.7916666665,
            "unit": "ns",
            "range": "± 37882.34222415409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980168.9388020834,
            "unit": "ns",
            "range": "± 11582.718310181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903079.6456473215,
            "unit": "ns",
            "range": "± 5624.685205465889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673805.172413793,
            "unit": "ns",
            "range": "± 158893.25383139352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3904179.5918367347,
            "unit": "ns",
            "range": "± 155781.18465173064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4575087.096774193,
            "unit": "ns",
            "range": "± 136938.5865803487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5011250,
            "unit": "ns",
            "range": "± 158682.42795337003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8109271.428571428,
            "unit": "ns",
            "range": "± 322119.2190012884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362138,
            "unit": "ns",
            "range": "± 13588.543944463374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299727.45098039217,
            "unit": "ns",
            "range": "± 11614.595618124164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263153.6082474227,
            "unit": "ns",
            "range": "± 15333.657572584065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6265300,
            "unit": "ns",
            "range": "± 107745.59601922698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4175841.1764705884,
            "unit": "ns",
            "range": "± 133465.94189926816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24484.042553191488,
            "unit": "ns",
            "range": "± 2469.613316625424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109910.20408163265,
            "unit": "ns",
            "range": "± 8164.184920850265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105409.59595959596,
            "unit": "ns",
            "range": "± 12292.879299323598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126226.31578947368,
            "unit": "ns",
            "range": "± 16091.012494268514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7710.416666666667,
            "unit": "ns",
            "range": "± 1213.9955056421331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23517.34693877551,
            "unit": "ns",
            "range": "± 3021.3936673041444"
          }
        ]
      }
    ]
  }
}