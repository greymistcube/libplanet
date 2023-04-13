window.BENCHMARK_DATA = {
  "lastUpdate": 1681368666774,
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
          "id": "8a18bee5c4821201907fb22c1dab7c2d8ee38026",
          "message": "Changelog",
          "timestamp": "2023-04-13T15:30:07+09:00",
          "tree_id": "4ae542b5c594ed531377b8b968d3af2c4b0253b5",
          "url": "https://github.com/greymistcube/libplanet/commit/8a18bee5c4821201907fb22c1dab7c2d8ee38026"
        },
        "date": 1681368644096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1756557.2916666667,
            "unit": "ns",
            "range": "± 231561.55291493706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3299318.3673469387,
            "unit": "ns",
            "range": "± 399940.46679318446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2608640.217391304,
            "unit": "ns",
            "range": "± 319237.13293742324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7130093.684210527,
            "unit": "ns",
            "range": "± 616323.7947375443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77208.33333333333,
            "unit": "ns",
            "range": "± 18400.204041584155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8737858.333333334,
            "unit": "ns",
            "range": "± 1069328.865633577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23815535.416666668,
            "unit": "ns",
            "range": "± 1578213.1713781261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62458808.1632653,
            "unit": "ns",
            "range": "± 3638383.4961542077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130581998.07692307,
            "unit": "ns",
            "range": "± 5357759.146651298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237632746.15384614,
            "unit": "ns",
            "range": "± 8225630.394938102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5593900.390625,
            "unit": "ns",
            "range": "± 148066.14328111953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1770561.81640625,
            "unit": "ns",
            "range": "± 33343.02735979186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1440877.6489257812,
            "unit": "ns",
            "range": "± 25579.798329300636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2974853.8330078125,
            "unit": "ns",
            "range": "± 57133.45084901421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952932.4327256945,
            "unit": "ns",
            "range": "± 18870.696615018882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900351.6676682692,
            "unit": "ns",
            "range": "± 23810.266495998014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3589397.8947368423,
            "unit": "ns",
            "range": "± 372433.7222142072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3806468.0412371135,
            "unit": "ns",
            "range": "± 392624.0824425211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4631960.215053763,
            "unit": "ns",
            "range": "± 504497.4887126244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4708741.237113402,
            "unit": "ns",
            "range": "± 640025.1700377001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8775031.313131314,
            "unit": "ns",
            "range": "± 990717.7308258633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 412576.59574468085,
            "unit": "ns",
            "range": "± 63983.42094658873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328807.36842105264,
            "unit": "ns",
            "range": "± 55397.87084414843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294125.5319148936,
            "unit": "ns",
            "range": "± 44733.58637214352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6633122.340425532,
            "unit": "ns",
            "range": "± 534219.9432584943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4418479.166666667,
            "unit": "ns",
            "range": "± 461315.4080091698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32915.463917525776,
            "unit": "ns",
            "range": "± 10183.722103253245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113448.48484848485,
            "unit": "ns",
            "range": "± 23440.969557664193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99460,
            "unit": "ns",
            "range": "± 23632.26877935283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135031.25,
            "unit": "ns",
            "range": "± 24979.7531170641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6107.594936708861,
            "unit": "ns",
            "range": "± 1194.729038253373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32034.375,
            "unit": "ns",
            "range": "± 10487.073026249733"
          }
        ]
      }
    ]
  }
}