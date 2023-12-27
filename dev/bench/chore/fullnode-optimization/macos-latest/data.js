window.BENCHMARK_DATA = {
  "lastUpdate": 1703656986044,
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
          "id": "e9e2b20ae2a1ec19763e3beb49d7770ae84426a1",
          "message": "Slightly optimized FullNode",
          "timestamp": "2023-12-27T14:44:14+09:00",
          "tree_id": "3079199eb5d6660ea78a5af483aec226128c61d9",
          "url": "https://github.com/greymistcube/libplanet/commit/e9e2b20ae2a1ec19763e3beb49d7770ae84426a1"
        },
        "date": 1703656857961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7964216.125,
            "unit": "ns",
            "range": "± 191894.6890963244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20611933.57894737,
            "unit": "ns",
            "range": "± 699430.6145983987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49616088.35,
            "unit": "ns",
            "range": "± 1112601.929923597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101977323.86666666,
            "unit": "ns",
            "range": "± 1814092.532343685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208648705.26666668,
            "unit": "ns",
            "range": "± 2485871.7032699436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65314.42391304348,
            "unit": "ns",
            "range": "± 9458.95666159938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339262.7826086957,
            "unit": "ns",
            "range": "± 51390.077896574134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294473.43956043955,
            "unit": "ns",
            "range": "± 18406.68658166784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310854.03846153844,
            "unit": "ns",
            "range": "± 26358.274474929625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4173772.423076923,
            "unit": "ns",
            "range": "± 214128.91248278206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4170419.533333333,
            "unit": "ns",
            "range": "± 76601.2433374165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19169.554347826088,
            "unit": "ns",
            "range": "± 2704.937062760864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97983.91397849462,
            "unit": "ns",
            "range": "± 17525.01314869935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107769.87777777777,
            "unit": "ns",
            "range": "± 20350.843077711983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105915.36458333333,
            "unit": "ns",
            "range": "± 22325.71826303505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5830.056701030928,
            "unit": "ns",
            "range": "± 853.9758116338365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17981.663157894738,
            "unit": "ns",
            "range": "± 1829.2145076828965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688877.5,
            "unit": "ns",
            "range": "± 43857.23208419515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2780915.2666666666,
            "unit": "ns",
            "range": "± 164673.23358623983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153566.9583333335,
            "unit": "ns",
            "range": "± 200888.71711466822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9099732.25862069,
            "unit": "ns",
            "range": "± 263091.8040305452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3356147.6836734693,
            "unit": "ns",
            "range": "± 202612.7158612003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3660219.375,
            "unit": "ns",
            "range": "± 252526.84724883578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4455107.897435897,
            "unit": "ns",
            "range": "± 228242.6193802852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4274427.947916667,
            "unit": "ns",
            "range": "± 275220.9075957317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19328972.958333332,
            "unit": "ns",
            "range": "± 3624321.8910168414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5520782.678013393,
            "unit": "ns",
            "range": "± 54771.32860540684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1674302.6909466912,
            "unit": "ns",
            "range": "± 33903.62048746014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059569.5263020834,
            "unit": "ns",
            "range": "± 8988.351470847954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629858.0186298075,
            "unit": "ns",
            "range": "± 12653.869359088932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797610.2677734375,
            "unit": "ns",
            "range": "± 6801.84121738591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747063.7757161459,
            "unit": "ns",
            "range": "± 12298.167574864037"
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
          "id": "ec9a0fbdbc46e0e6d87cf8864586628b5b286582",
          "message": "Changelog",
          "timestamp": "2023-12-27T14:50:07+09:00",
          "tree_id": "d889867351d6c3596bc4fa674fbb5420ac7897dc",
          "url": "https://github.com/greymistcube/libplanet/commit/ec9a0fbdbc46e0e6d87cf8864586628b5b286582"
        },
        "date": 1703656971288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7764354.666666667,
            "unit": "ns",
            "range": "± 159165.054806416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18813164,
            "unit": "ns",
            "range": "± 316642.047767033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46389303.55,
            "unit": "ns",
            "range": "± 1016396.0329235262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94304812.23076923,
            "unit": "ns",
            "range": "± 2560032.031852731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190643737.41304347,
            "unit": "ns",
            "range": "± 4608189.757305711"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35796.85555555556,
            "unit": "ns",
            "range": "± 3673.8727463576447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216242.343373494,
            "unit": "ns",
            "range": "± 10542.439335073528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215023.76842105263,
            "unit": "ns",
            "range": "± 16276.261902545952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185375.368852459,
            "unit": "ns",
            "range": "± 8171.159961464896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3682875.5555555555,
            "unit": "ns",
            "range": "± 75830.80138604414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3509839.076923077,
            "unit": "ns",
            "range": "± 55261.18616241351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12433.556818181818,
            "unit": "ns",
            "range": "± 1046.7567080893198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60540.36021505376,
            "unit": "ns",
            "range": "± 5294.203823196849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52345.36363636364,
            "unit": "ns",
            "range": "± 3245.1449897007265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59729.083333333336,
            "unit": "ns",
            "range": "± 11623.249476501072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3218.78021978022,
            "unit": "ns",
            "range": "± 225.7046153320162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12490.815217391304,
            "unit": "ns",
            "range": "± 1007.6550618748115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1049543.3469387756,
            "unit": "ns",
            "range": "± 101534.05877772438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2281654.649484536,
            "unit": "ns",
            "range": "± 166021.1568969977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538239.7258064516,
            "unit": "ns",
            "range": "± 118128.88461329458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7038722.122222222,
            "unit": "ns",
            "range": "± 564734.8009507357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3026817.0384615385,
            "unit": "ns",
            "range": "± 89276.99796636667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2993535.263157895,
            "unit": "ns",
            "range": "± 128442.79330524743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3502542.125,
            "unit": "ns",
            "range": "± 63979.23547722339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3384570.9215686275,
            "unit": "ns",
            "range": "± 138033.27245194805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12963983.909090908,
            "unit": "ns",
            "range": "± 1966678.904971702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4350955.916503906,
            "unit": "ns",
            "range": "± 82487.52865890547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1357782.7312911183,
            "unit": "ns",
            "range": "± 29406.874758704118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 881178.5621744791,
            "unit": "ns",
            "range": "± 14427.030681695862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987805.8352272727,
            "unit": "ns",
            "range": "± 41116.773268108576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 700971.2012841236,
            "unit": "ns",
            "range": "± 44311.21702838166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594841.6229771206,
            "unit": "ns",
            "range": "± 9784.357767258576"
          }
        ]
      }
    ]
  }
}