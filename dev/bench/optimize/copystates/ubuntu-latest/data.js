window.BENCHMARK_DATA = {
  "lastUpdate": 1706246550132,
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
          "id": "5cd331a36bb4120f25597dd64c068da738482897",
          "message": "Use Stack instead of Queue internally",
          "timestamp": "2024-01-26T14:08:20+09:00",
          "tree_id": "49577e08dc19e0fe9c4d3cb94ecd84e64d090d7a",
          "url": "https://github.com/greymistcube/libplanet/commit/5cd331a36bb4120f25597dd64c068da738482897"
        },
        "date": 1706246368923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2643715.2333333334,
            "unit": "ns",
            "range": "± 79006.31320024622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2634290.3421052634,
            "unit": "ns",
            "range": "± 88983.85498520757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3302675.35,
            "unit": "ns",
            "range": "± 68346.68315463065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3041654.0714285714,
            "unit": "ns",
            "range": "± 84032.74183313733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6912729.769230769,
            "unit": "ns",
            "range": "± 105403.53043356267"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50482.5625,
            "unit": "ns",
            "range": "± 7205.0356963394925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1111381.116161616,
            "unit": "ns",
            "range": "± 109445.83014681115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2068525.1971830986,
            "unit": "ns",
            "range": "± 99107.2389071007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579993.03125,
            "unit": "ns",
            "range": "± 111066.10907467897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6195543.693333333,
            "unit": "ns",
            "range": "± 309890.9293418422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6010282.433333334,
            "unit": "ns",
            "range": "± 37405.742822014196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14806641.666666666,
            "unit": "ns",
            "range": "± 199538.12700250212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36859217.071428575,
            "unit": "ns",
            "range": "± 122247.74170100038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75645066.85714285,
            "unit": "ns",
            "range": "± 468478.5513164039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151865457.84615386,
            "unit": "ns",
            "range": "± 774224.1439156844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3770014.3741629464,
            "unit": "ns",
            "range": "± 12733.20708656793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214337.3721354166,
            "unit": "ns",
            "range": "± 19113.293873470597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760678.0355747768,
            "unit": "ns",
            "range": "± 1655.276492404888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927226.79296875,
            "unit": "ns",
            "range": "± 27530.883696501383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617478.0431189904,
            "unit": "ns",
            "range": "± 6164.589205040677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582995.7106584822,
            "unit": "ns",
            "range": "± 2485.6306844055016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241219.2619047619,
            "unit": "ns",
            "range": "± 12916.58707171449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233693.8,
            "unit": "ns",
            "range": "± 13639.330442724915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167369.2857142857,
            "unit": "ns",
            "range": "± 5160.635428523547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3149528.5,
            "unit": "ns",
            "range": "± 35757.955598934685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2896460.433333333,
            "unit": "ns",
            "range": "± 23705.527138703528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24354.050505050505,
            "unit": "ns",
            "range": "± 3029.96451576763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96847.87,
            "unit": "ns",
            "range": "± 16838.88786585049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69331.69,
            "unit": "ns",
            "range": "± 20078.80001127628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74112.98484848485,
            "unit": "ns",
            "range": "± 21099.675017501002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5835.406976744186,
            "unit": "ns",
            "range": "± 1132.0408886598625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14082.08510638298,
            "unit": "ns",
            "range": "± 1959.941536376112"
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
          "id": "e2f6e75e0eed91f56b85c3e23a93ae953d042d73",
          "message": "Changelog",
          "timestamp": "2024-01-26T14:11:38+09:00",
          "tree_id": "0db427abe9199e3a9011077c840f5b6d399fdb5b",
          "url": "https://github.com/greymistcube/libplanet/commit/e2f6e75e0eed91f56b85c3e23a93ae953d042d73"
        },
        "date": 1706246543834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2517574.6842105263,
            "unit": "ns",
            "range": "± 85923.16799173212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2575334.6296296297,
            "unit": "ns",
            "range": "± 107099.61342178637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3354067.9375,
            "unit": "ns",
            "range": "± 103309.60709344712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3181656.653846154,
            "unit": "ns",
            "range": "± 86624.07405782405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7409879.689655173,
            "unit": "ns",
            "range": "± 216305.44491678945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45459.96153846154,
            "unit": "ns",
            "range": "± 5219.578076408714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066932.7872340425,
            "unit": "ns",
            "range": "± 95927.73203284333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2007908.607142857,
            "unit": "ns",
            "range": "± 57562.91507388163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1512420.6666666667,
            "unit": "ns",
            "range": "± 88569.43358975551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6197657.860465116,
            "unit": "ns",
            "range": "± 336957.5801082792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6008713.285714285,
            "unit": "ns",
            "range": "± 31420.913181237385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14987811.833333334,
            "unit": "ns",
            "range": "± 128566.81400369461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37014458.6,
            "unit": "ns",
            "range": "± 177856.46711556084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77323842.14285715,
            "unit": "ns",
            "range": "± 485450.24193273915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149678365.69230768,
            "unit": "ns",
            "range": "± 1049122.4969851696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3790052.9033854166,
            "unit": "ns",
            "range": "± 46025.414548327695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189977.615234375,
            "unit": "ns",
            "range": "± 4721.80273993993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774092.883219401,
            "unit": "ns",
            "range": "± 2334.6333483113276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924531.5946514423,
            "unit": "ns",
            "range": "± 4856.825832024024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609760.9107840402,
            "unit": "ns",
            "range": "± 867.1131393803513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579454.2071940104,
            "unit": "ns",
            "range": "± 862.2254797854093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223964.22826086957,
            "unit": "ns",
            "range": "± 17023.128491221672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197474.48571428572,
            "unit": "ns",
            "range": "± 9560.265966743049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169200.125,
            "unit": "ns",
            "range": "± 4069.4460290923694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3112294.4,
            "unit": "ns",
            "range": "± 31599.857203113166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2912303.3076923075,
            "unit": "ns",
            "range": "± 29489.20030390961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13442.935483870968,
            "unit": "ns",
            "range": "± 963.1765245953396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68574.62626262626,
            "unit": "ns",
            "range": "± 9229.324188213348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88430.33333333333,
            "unit": "ns",
            "range": "± 1286.2086168505502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91488.86734693877,
            "unit": "ns",
            "range": "± 14696.700809826738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6785.309278350515,
            "unit": "ns",
            "range": "± 851.9861765411351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14702.363636363636,
            "unit": "ns",
            "range": "± 2604.9666804929725"
          }
        ]
      }
    ]
  }
}