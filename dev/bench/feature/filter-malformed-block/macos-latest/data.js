window.BENCHMARK_DATA = {
  "lastUpdate": 1683609175095,
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
          "id": "3409656fff1d7e69f5c398619f989df77dc0aa6f",
          "message": "Changelog",
          "timestamp": "2023-05-09T13:53:18+09:00",
          "tree_id": "593b943c1f7328ababea9de3d3f08cfed1792324",
          "url": "https://github.com/greymistcube/libplanet/commit/3409656fff1d7e69f5c398619f989df77dc0aa6f"
        },
        "date": 1683608913436,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8039743.080645162,
            "unit": "ns",
            "range": "± 240412.0497904621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19481605.47826087,
            "unit": "ns",
            "range": "± 475471.59643308294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48486810.666666664,
            "unit": "ns",
            "range": "± 1332010.6731289008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93356036.68181819,
            "unit": "ns",
            "range": "± 2287818.646233452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192236851,
            "unit": "ns",
            "range": "± 2934858.5972649516"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59270.6914893617,
            "unit": "ns",
            "range": "± 9918.326955286855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304177.1789473684,
            "unit": "ns",
            "range": "± 20840.707676236925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290982.2816091954,
            "unit": "ns",
            "range": "± 15805.554438326852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266979.402173913,
            "unit": "ns",
            "range": "± 22379.967435608487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3927892.407407407,
            "unit": "ns",
            "range": "± 107418.51593050544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678288.28,
            "unit": "ns",
            "range": "± 96690.2825350614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16408.69318181818,
            "unit": "ns",
            "range": "± 1704.7626481096304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84747.68478260869,
            "unit": "ns",
            "range": "± 8890.203614436485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91454.26262626263,
            "unit": "ns",
            "range": "± 13814.44484956787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95214.60215053764,
            "unit": "ns",
            "range": "± 13710.844221414973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4948.540229885058,
            "unit": "ns",
            "range": "± 855.5794147772866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15846.614457831325,
            "unit": "ns",
            "range": "± 1888.8791929718748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659779.4595959596,
            "unit": "ns",
            "range": "± 234855.0272433787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2974692.345679012,
            "unit": "ns",
            "range": "± 154849.94216701863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2554629.289473684,
            "unit": "ns",
            "range": "± 235409.9819585874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6495191.417808219,
            "unit": "ns",
            "range": "± 320531.5936382851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3122873.4821428573,
            "unit": "ns",
            "range": "± 133076.28147412857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3173930.843137255,
            "unit": "ns",
            "range": "± 113964.70004564968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4214869.7532467535,
            "unit": "ns",
            "range": "± 206585.40633598517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4110771.361702128,
            "unit": "ns",
            "range": "± 256295.81164948188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7354683.155172414,
            "unit": "ns",
            "range": "± 322182.9189791459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6055348.668269231,
            "unit": "ns",
            "range": "± 55202.53608571921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850070.786830357,
            "unit": "ns",
            "range": "± 10717.60623638909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1237746.9415364584,
            "unit": "ns",
            "range": "± 12024.419236841006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2419159.8976004464,
            "unit": "ns",
            "range": "± 28624.008449675155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 755808.6238932292,
            "unit": "ns",
            "range": "± 6967.738611493986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729558.6256760817,
            "unit": "ns",
            "range": "± 3946.1684052163696"
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
          "id": "2fa1b9f4a9df8f74b0c591af84b69bc6be5d882d",
          "message": "Changelog\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>",
          "timestamp": "2023-05-09T13:56:12+09:00",
          "tree_id": "20ca298679e0f0d825d80b728910e4013fb33ab0",
          "url": "https://github.com/greymistcube/libplanet/commit/2fa1b9f4a9df8f74b0c591af84b69bc6be5d882d"
        },
        "date": 1683609155955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8793868,
            "unit": "ns",
            "range": "± 118821.0838950731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24417077.07142857,
            "unit": "ns",
            "range": "± 221971.47231690152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57356207.928571425,
            "unit": "ns",
            "range": "± 460974.23077892896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118352902.13333334,
            "unit": "ns",
            "range": "± 1183837.751188473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234153261.85714287,
            "unit": "ns",
            "range": "± 1572276.992277117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69312.2,
            "unit": "ns",
            "range": "± 8652.99473506753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385741.8134328358,
            "unit": "ns",
            "range": "± 18078.724309889752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360192.04225352115,
            "unit": "ns",
            "range": "± 17067.81221015295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325428.2,
            "unit": "ns",
            "range": "± 14556.535440382735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4853222.970588235,
            "unit": "ns",
            "range": "± 98130.30377839308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4395213.615384615,
            "unit": "ns",
            "range": "± 49081.26512146032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20951.282608695652,
            "unit": "ns",
            "range": "± 1997.6616568074871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104451.74489795919,
            "unit": "ns",
            "range": "± 10240.399023023803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99950.29292929293,
            "unit": "ns",
            "range": "± 11671.943501713602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112903.16161616161,
            "unit": "ns",
            "range": "± 13458.666851608792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5614.25,
            "unit": "ns",
            "range": "± 690.4674694116947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20607.91935483871,
            "unit": "ns",
            "range": "± 1931.61731246001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1837905.5408163266,
            "unit": "ns",
            "range": "± 185707.15485076595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3524454.772727273,
            "unit": "ns",
            "range": "± 109072.99432268762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2836043.144444444,
            "unit": "ns",
            "range": "± 156376.63559478824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7274084.475609756,
            "unit": "ns",
            "range": "± 260577.2538993463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3897805.203703704,
            "unit": "ns",
            "range": "± 99307.73220721335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4010343.7615384613,
            "unit": "ns",
            "range": "± 187021.5994445291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5118136.807692308,
            "unit": "ns",
            "range": "± 75437.47886537634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5080767.641509434,
            "unit": "ns",
            "range": "± 206366.42133361255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8872015.807692308,
            "unit": "ns",
            "range": "± 238618.81304101218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7092506.178125,
            "unit": "ns",
            "range": "± 38254.67263962801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2235402.5486778845,
            "unit": "ns",
            "range": "± 19582.562909081807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1454311.4204427083,
            "unit": "ns",
            "range": "± 7002.542192645035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2850027.478385417,
            "unit": "ns",
            "range": "± 13533.298089511998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028240.0236979167,
            "unit": "ns",
            "range": "± 3392.3505747080944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848584.7061848958,
            "unit": "ns",
            "range": "± 2652.193165744109"
          }
        ]
      }
    ]
  }
}