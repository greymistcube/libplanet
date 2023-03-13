window.BENCHMARK_DATA = {
  "lastUpdate": 1678677354401,
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
          "id": "9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad",
          "message": "Added test for forking",
          "timestamp": "2023-03-13T10:44:44+09:00",
          "tree_id": "f9eb705af2c77b510ecdaf84c43ffe709d979a1d",
          "url": "https://github.com/greymistcube/libplanet/commit/9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad"
        },
        "date": 1678673174324,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273315.9693877551,
            "unit": "ns",
            "range": "± 45317.26412690319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293063.8163265306,
            "unit": "ns",
            "range": "± 38127.617416820605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245591.34375,
            "unit": "ns",
            "range": "± 36921.31558436931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15621896.78125,
            "unit": "ns",
            "range": "± 1106496.8723814352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12880018.547169812,
            "unit": "ns",
            "range": "± 537705.8581699581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31765.878787878788,
            "unit": "ns",
            "range": "± 11853.440540983327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88572.43,
            "unit": "ns",
            "range": "± 19924.17394521266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51713.15053763441,
            "unit": "ns",
            "range": "± 13174.404012545985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153087.375,
            "unit": "ns",
            "range": "± 31449.902284594245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8876.865853658537,
            "unit": "ns",
            "range": "± 3864.8110450423524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 39696.03125,
            "unit": "ns",
            "range": "± 9780.696082701428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4541524.770833333,
            "unit": "ns",
            "range": "± 445793.61373160535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6964186.333333333,
            "unit": "ns",
            "range": "± 528671.777679232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 33467893.66101695,
            "unit": "ns",
            "range": "± 1476605.8722209877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8521026.684210526,
            "unit": "ns",
            "range": "± 725815.6037318009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39898372.347826086,
            "unit": "ns",
            "range": "± 1514419.6836495374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8070788.318359375,
            "unit": "ns",
            "range": "± 156021.40900492418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2447496.7575334823,
            "unit": "ns",
            "range": "± 39483.99764594132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1894366.5018382352,
            "unit": "ns",
            "range": "± 37332.73296824325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3618347.2898828126,
            "unit": "ns",
            "range": "± 231207.66993657404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1083780.1908735796,
            "unit": "ns",
            "range": "± 23192.9818361463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1109837.6436298077,
            "unit": "ns",
            "range": "± 15911.558424038503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10887630.479166666,
            "unit": "ns",
            "range": "± 946612.4435780462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 28687305.76,
            "unit": "ns",
            "range": "± 754617.2288594553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 73831274.9484536,
            "unit": "ns",
            "range": "± 5291746.103602963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 140351035.05357143,
            "unit": "ns",
            "range": "± 5673547.984535601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 288854286.39772725,
            "unit": "ns",
            "range": "± 15888077.174361296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96314.55434782608,
            "unit": "ns",
            "range": "± 19355.403497098047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1904460.4130434783,
            "unit": "ns",
            "range": "± 178247.07141457184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3399457.3229166665,
            "unit": "ns",
            "range": "± 336298.3040422515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2659709.414893617,
            "unit": "ns",
            "range": "± 240284.53877422967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6999053.397959184,
            "unit": "ns",
            "range": "± 675271.9850344037"
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
          "id": "3548bcca70176accabec0ad9c52cede62079d0f8",
          "message": "Changelog",
          "timestamp": "2023-03-13T11:57:05+09:00",
          "tree_id": "f8a594a2f58365c2a259a9e7f236d46f03039676",
          "url": "https://github.com/greymistcube/libplanet/commit/3548bcca70176accabec0ad9c52cede62079d0f8"
        },
        "date": 1678677346078,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217643.59139784946,
            "unit": "ns",
            "range": "± 15894.780154419142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232052.13186813187,
            "unit": "ns",
            "range": "± 15874.566850579855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201919.21649484537,
            "unit": "ns",
            "range": "± 17399.66720720232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13088970.636363637,
            "unit": "ns",
            "range": "± 959702.0544077193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11266505.75510204,
            "unit": "ns",
            "range": "± 807016.5283652127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25254.04081632653,
            "unit": "ns",
            "range": "± 6517.079862673252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64283.38144329897,
            "unit": "ns",
            "range": "± 10560.07705093743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47447.9375,
            "unit": "ns",
            "range": "± 8709.920299124744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112784.78350515464,
            "unit": "ns",
            "range": "± 17611.121091767316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11462.575757575758,
            "unit": "ns",
            "range": "± 6148.490397253671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24487.755102040817,
            "unit": "ns",
            "range": "± 7043.553977960101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3645952.840425532,
            "unit": "ns",
            "range": "± 286902.8312148989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5917535.043010753,
            "unit": "ns",
            "range": "± 376617.0804117751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30474407.2,
            "unit": "ns",
            "range": "± 806547.7006682039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7462686.263157895,
            "unit": "ns",
            "range": "± 424886.0130407997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34456350.87755102,
            "unit": "ns",
            "range": "± 2144745.243131366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6857663.679956896,
            "unit": "ns",
            "range": "± 200054.24740897887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2153367.8969726562,
            "unit": "ns",
            "range": "± 41638.15006282443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1594318.4971590908,
            "unit": "ns",
            "range": "± 49150.019348089176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2997023.539607558,
            "unit": "ns",
            "range": "± 109073.01779839366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 971486.2509440104,
            "unit": "ns",
            "range": "± 28673.946288441315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908050.1910574777,
            "unit": "ns",
            "range": "± 15942.80316137126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8810988.721649485,
            "unit": "ns",
            "range": "± 615839.0789054384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23882114.53521127,
            "unit": "ns",
            "range": "± 1162345.1417996392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55953995.53608248,
            "unit": "ns",
            "range": "± 3967805.4510092097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116335823.78125,
            "unit": "ns",
            "range": "± 5271092.397267183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 231228568.84210527,
            "unit": "ns",
            "range": "± 4884007.17598959"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59443.94623655914,
            "unit": "ns",
            "range": "± 8709.770005656057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642622.381443299,
            "unit": "ns",
            "range": "± 209264.80324795443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3200996.7634408604,
            "unit": "ns",
            "range": "± 208101.1098665846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2560649.5353535353,
            "unit": "ns",
            "range": "± 290116.1929354398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6543498.010309278,
            "unit": "ns",
            "range": "± 616668.2696184543"
          }
        ]
      }
    ]
  }
}