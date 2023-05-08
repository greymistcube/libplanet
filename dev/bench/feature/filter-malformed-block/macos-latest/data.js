window.BENCHMARK_DATA = {
  "lastUpdate": 1683538014473,
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
          "id": "b91b19a69521ad081afb31944c288d98ebbce4f8",
          "message": "Added test",
          "timestamp": "2023-05-08T17:26:06+09:00",
          "tree_id": "3084fc63159fadeeff50ba744a90f6f4c5c3efde",
          "url": "https://github.com/greymistcube/libplanet/commit/b91b19a69521ad081afb31944c288d98ebbce4f8"
        },
        "date": 1683536822903,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9877822.258064516,
            "unit": "ns",
            "range": "± 697391.5202306269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24353202.564102564,
            "unit": "ns",
            "range": "± 848659.7417150667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61240754.9,
            "unit": "ns",
            "range": "± 1954590.786153809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120202252.11764705,
            "unit": "ns",
            "range": "± 2394879.0814762153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243131759.7419355,
            "unit": "ns",
            "range": "± 6794904.602101621"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71198.69565217392,
            "unit": "ns",
            "range": "± 8379.848393209015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393154.9555555555,
            "unit": "ns",
            "range": "± 25938.484194690853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372163.1111111111,
            "unit": "ns",
            "range": "± 29949.28165987578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313254.3125,
            "unit": "ns",
            "range": "± 5900.439827885714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4921984.794871795,
            "unit": "ns",
            "range": "± 169301.6464755297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4306961.357142857,
            "unit": "ns",
            "range": "± 56588.9427342985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20496.191489361703,
            "unit": "ns",
            "range": "± 2073.3317339650634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103824.66483516483,
            "unit": "ns",
            "range": "± 7967.035332144486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94114.44791666667,
            "unit": "ns",
            "range": "± 8714.903014068903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105891.83157894737,
            "unit": "ns",
            "range": "± 14833.92777834093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4910.488095238095,
            "unit": "ns",
            "range": "± 511.8527295268034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19379.782608695652,
            "unit": "ns",
            "range": "± 1587.6855490843081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1748811.2291666667,
            "unit": "ns",
            "range": "± 160451.44951610942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3445351.1666666665,
            "unit": "ns",
            "range": "± 160484.45131083892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2795623.432989691,
            "unit": "ns",
            "range": "± 178295.34793747118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7198721.554054054,
            "unit": "ns",
            "range": "± 239416.01414552526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4083047.2065217393,
            "unit": "ns",
            "range": "± 514124.93249073735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4097790.222222222,
            "unit": "ns",
            "range": "± 273959.2650547686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5477946.361702127,
            "unit": "ns",
            "range": "± 416133.61041407706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5341241.331460674,
            "unit": "ns",
            "range": "± 446741.3274867957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10475779.253333334,
            "unit": "ns",
            "range": "± 525090.5600654171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7233040.837053572,
            "unit": "ns",
            "range": "± 124415.46460089284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2181543.0895647323,
            "unit": "ns",
            "range": "± 27477.606540938767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1485697.7593470982,
            "unit": "ns",
            "range": "± 19705.49861383703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3097248.4560546875,
            "unit": "ns",
            "range": "± 13948.098922297066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 942840.4045222356,
            "unit": "ns",
            "range": "± 5654.753761642945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 855293.8731166294,
            "unit": "ns",
            "range": "± 4682.515053509296"
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
          "id": "adcfdffcc09b7116c29c07ea9fd0473ecd47c4ec",
          "message": "Changelog",
          "timestamp": "2023-05-08T18:06:30+09:00",
          "tree_id": "91749c8cdb65247dad97992d65ca7198e5e84269",
          "url": "https://github.com/greymistcube/libplanet/commit/adcfdffcc09b7116c29c07ea9fd0473ecd47c4ec"
        },
        "date": 1683537998643,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9399167.510526316,
            "unit": "ns",
            "range": "± 626239.1578245639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24535053.91836735,
            "unit": "ns",
            "range": "± 4133541.4989999435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55401094.47619048,
            "unit": "ns",
            "range": "± 1318745.1828882492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111483790.64285715,
            "unit": "ns",
            "range": "± 1957059.1432837576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224765660.96666667,
            "unit": "ns",
            "range": "± 6654271.963536656"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76468.68604651163,
            "unit": "ns",
            "range": "± 4763.477613137469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326188.02222222224,
            "unit": "ns",
            "range": "± 22872.330285164604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326862.07446808513,
            "unit": "ns",
            "range": "± 38779.32386580533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341205.3604651163,
            "unit": "ns",
            "range": "± 58946.60698870038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4503765.201030928,
            "unit": "ns",
            "range": "± 305035.9445604036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4056843.087628866,
            "unit": "ns",
            "range": "± 297215.8717394631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22919.58695652174,
            "unit": "ns",
            "range": "± 3207.4106058553325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102766.41758241758,
            "unit": "ns",
            "range": "± 19722.317632044236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118805.76595744681,
            "unit": "ns",
            "range": "± 9980.511347713573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117076.63541666667,
            "unit": "ns",
            "range": "± 18641.37083287701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6872.033333333334,
            "unit": "ns",
            "range": "± 806.5111777125478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21467.52688172043,
            "unit": "ns",
            "range": "± 4552.309563362597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1509204.1237113401,
            "unit": "ns",
            "range": "± 161434.4525830748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3170695.2021276597,
            "unit": "ns",
            "range": "± 248047.16724280312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2770381.7252747254,
            "unit": "ns",
            "range": "± 316559.85100290156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6759222.90625,
            "unit": "ns",
            "range": "± 437743.0337997774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3596859.412371134,
            "unit": "ns",
            "range": "± 306506.01266861905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3848955.191011236,
            "unit": "ns",
            "range": "± 415055.0535133556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4780832.826530612,
            "unit": "ns",
            "range": "± 383117.7001170594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4903107.847826087,
            "unit": "ns",
            "range": "± 486948.6446449441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8222330.765957447,
            "unit": "ns",
            "range": "± 763208.88423741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7001315.22516741,
            "unit": "ns",
            "range": "± 288229.7042457723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2038167.6850585938,
            "unit": "ns",
            "range": "± 36982.05914237947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337234.6492745536,
            "unit": "ns",
            "range": "± 18182.376475312674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2935375.0293975514,
            "unit": "ns",
            "range": "± 210180.27759965332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788535.0063852164,
            "unit": "ns",
            "range": "± 7147.425962083888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838997.4583565848,
            "unit": "ns",
            "range": "± 13016.82455224207"
          }
        ]
      }
    ]
  }
}