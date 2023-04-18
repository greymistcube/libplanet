window.BENCHMARK_DATA = {
  "lastUpdate": 1681814908239,
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
          "id": "bdbe05e02a712e273e1db69240b50438da08b2bb",
          "message": "Changelog",
          "timestamp": "2023-04-14T17:57:57+09:00",
          "tree_id": "90dd6320f117a4f0d35e0286c0caae6052875fb4",
          "url": "https://github.com/greymistcube/libplanet/commit/bdbe05e02a712e273e1db69240b50438da08b2bb"
        },
        "date": 1681463631143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1039863.6363636364,
            "unit": "ns",
            "range": "± 105728.79577499066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1811645.4545454546,
            "unit": "ns",
            "range": "± 60585.73189366378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1621652,
            "unit": "ns",
            "range": "± 135200.666784561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3855076.3157894737,
            "unit": "ns",
            "range": "± 95742.22270075709"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33312.16216216216,
            "unit": "ns",
            "range": "± 1671.923894078251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5236973.333333333,
            "unit": "ns",
            "range": "± 29905.791762673343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13114673.333333334,
            "unit": "ns",
            "range": "± 80701.50880751564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31761585.714285713,
            "unit": "ns",
            "range": "± 297123.04847329826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63873986.666666664,
            "unit": "ns",
            "range": "± 233760.50890560946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128088346.66666667,
            "unit": "ns",
            "range": "± 1394713.239787339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3601017.998798077,
            "unit": "ns",
            "range": "± 3217.073682139209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1122550.1497395833,
            "unit": "ns",
            "range": "± 1501.9578499126483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 792319.0364583334,
            "unit": "ns",
            "range": "± 933.5039553906673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940668.8411458333,
            "unit": "ns",
            "range": "± 2656.5216847364886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641339.7395833334,
            "unit": "ns",
            "range": "± 1280.4744382674464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567193.5198102678,
            "unit": "ns",
            "range": "± 660.6724124200878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2239246.6666666665,
            "unit": "ns",
            "range": "± 31858.927133461948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2239397.222222222,
            "unit": "ns",
            "range": "± 55743.455662582935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2823313.3333333335,
            "unit": "ns",
            "range": "± 45154.0991125575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2873162.365591398,
            "unit": "ns",
            "range": "± 192999.42943933376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4936010.416666667,
            "unit": "ns",
            "range": "± 188840.04290424744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202357.37704918033,
            "unit": "ns",
            "range": "± 8342.950297834162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163596.22641509434,
            "unit": "ns",
            "range": "± 6411.077020527438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149629.62962962964,
            "unit": "ns",
            "range": "± 4169.9303457394935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3711753.846153846,
            "unit": "ns",
            "range": "± 21186.419210767046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2546053.3333333335,
            "unit": "ns",
            "range": "± 33195.99516866598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8755.172413793103,
            "unit": "ns",
            "range": "± 549.3672090623384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50280.645161290326,
            "unit": "ns",
            "range": "± 2298.5981978814984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44300,
            "unit": "ns",
            "range": "± 980.332918746967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56934.69387755102,
            "unit": "ns",
            "range": "± 8850.80347032242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2604.1666666666665,
            "unit": "ns",
            "range": "± 320.8267827993846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8700,
            "unit": "ns",
            "range": "± 794.7746011710909"
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
          "id": "38fb28d4ea7ce9a98de192046f7a00725f6808ab",
          "message": "Changelog",
          "timestamp": "2023-04-18T19:28:20+09:00",
          "tree_id": "4b290fa35c7819ed5366a09168097282f1c76f08",
          "url": "https://github.com/greymistcube/libplanet/commit/38fb28d4ea7ce9a98de192046f7a00725f6808ab"
        },
        "date": 1681814885765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408935,
            "unit": "ns",
            "range": "± 154228.6184286958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2682043,
            "unit": "ns",
            "range": "± 342754.94360351167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2313499.4623655914,
            "unit": "ns",
            "range": "± 182252.0910738606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5879336,
            "unit": "ns",
            "range": "± 622189.4905294146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51697.87234042553,
            "unit": "ns",
            "range": "± 6271.663165799661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7041778.865979382,
            "unit": "ns",
            "range": "± 535592.0946638485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20983976,
            "unit": "ns",
            "range": "± 1556973.1593749912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51093591.91919192,
            "unit": "ns",
            "range": "± 3464799.8999464214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97360159.59595959,
            "unit": "ns",
            "range": "± 7212968.1362441415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198191379.4871795,
            "unit": "ns",
            "range": "± 10207712.435331969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5062542.7001953125,
            "unit": "ns",
            "range": "± 154781.14552096315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1625769.4952713817,
            "unit": "ns",
            "range": "± 54839.70218264699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1253998.618861607,
            "unit": "ns",
            "range": "± 35540.60160293111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2885544.9969951925,
            "unit": "ns",
            "range": "± 76148.31411842843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 872338.2726332721,
            "unit": "ns",
            "range": "± 17610.75842042814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 823662.8059895834,
            "unit": "ns",
            "range": "± 24642.81076358843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3057810.101010101,
            "unit": "ns",
            "range": "± 271946.8951366783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3328973.4693877553,
            "unit": "ns",
            "range": "± 317717.3815619822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4251059.595959596,
            "unit": "ns",
            "range": "± 321031.73087470105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4294793.81443299,
            "unit": "ns",
            "range": "± 468678.596964921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7421553,
            "unit": "ns",
            "range": "± 770824.7684968892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324118.55670103093,
            "unit": "ns",
            "range": "± 41754.56394689314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264759,
            "unit": "ns",
            "range": "± 34327.837438911345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232050.51546391752,
            "unit": "ns",
            "range": "± 25330.865245911544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5416481.818181818,
            "unit": "ns",
            "range": "± 461577.9409638371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3781595.9183673467,
            "unit": "ns",
            "range": "± 345960.6848286176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19785.869565217392,
            "unit": "ns",
            "range": "± 2301.961968816325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89215.9574468085,
            "unit": "ns",
            "range": "± 10340.6214658136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83356.56565656565,
            "unit": "ns",
            "range": "± 11332.985643471673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104565.625,
            "unit": "ns",
            "range": "± 14682.075201988378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6256.565656565656,
            "unit": "ns",
            "range": "± 1116.2219090472397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18032.291666666668,
            "unit": "ns",
            "range": "± 2011.1004995519859"
          }
        ]
      }
    ]
  }
}