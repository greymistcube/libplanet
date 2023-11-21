window.BENCHMARK_DATA = {
  "lastUpdate": 1700536527002,
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
          "id": "f1142cf897d8e43294230fcf03a832bc254509a4",
          "message": "Release 3.7.1",
          "timestamp": "2023-11-21T09:14:45+09:00",
          "tree_id": "b6b49167f5b1d662728c77d704f5f4d189bd5805",
          "url": "https://github.com/greymistcube/libplanet/commit/f1142cf897d8e43294230fcf03a832bc254509a4"
        },
        "date": 1700526326474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200712.69607843139,
            "unit": "ns",
            "range": "± 8179.398701664098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207818.95833333334,
            "unit": "ns",
            "range": "± 18656.567872392632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178123.66666666666,
            "unit": "ns",
            "range": "± 4171.838243907993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3161971.533333333,
            "unit": "ns",
            "range": "± 24669.054851507113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2793864.769230769,
            "unit": "ns",
            "range": "± 19838.709787323394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16240.055555555555,
            "unit": "ns",
            "range": "± 1121.969737731156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69312.51546391753,
            "unit": "ns",
            "range": "± 7461.056895799854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62545.41935483871,
            "unit": "ns",
            "range": "± 6932.106161412964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71054.97916666667,
            "unit": "ns",
            "range": "± 13214.73740542347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4042.6075268817203,
            "unit": "ns",
            "range": "± 1110.5748360975792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11862.455555555556,
            "unit": "ns",
            "range": "± 1166.4093289757236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3687716.671875,
            "unit": "ns",
            "range": "± 77058.63447192336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202520.3688401442,
            "unit": "ns",
            "range": "± 4257.295457087679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775740.7287109375,
            "unit": "ns",
            "range": "± 14032.797138308835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967928.3645833333,
            "unit": "ns",
            "range": "± 5767.4578171457515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631354.476784446,
            "unit": "ns",
            "range": "± 15332.319496268945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575109.236328125,
            "unit": "ns",
            "range": "± 4056.3648228889324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39572.0412371134,
            "unit": "ns",
            "range": "± 5075.429271495018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2464802.285714286,
            "unit": "ns",
            "range": "± 43308.55457541948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2572523.9375,
            "unit": "ns",
            "range": "± 97528.33805157553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3188240.785714286,
            "unit": "ns",
            "range": "± 44724.84978893565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3022057.5465116277,
            "unit": "ns",
            "range": "± 111162.42483174778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6744788.6,
            "unit": "ns",
            "range": "± 175050.6316585044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5594951.366666666,
            "unit": "ns",
            "range": "± 36808.953046908624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14766598.714285715,
            "unit": "ns",
            "range": "± 57365.92950413709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36671017.76923077,
            "unit": "ns",
            "range": "± 212892.06582685426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75898568.64285715,
            "unit": "ns",
            "range": "± 326840.29013656644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146382738.46153846,
            "unit": "ns",
            "range": "± 717203.4438421936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966880.8157894737,
            "unit": "ns",
            "range": "± 93138.78137720683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895737.2153846154,
            "unit": "ns",
            "range": "± 88434.56428439976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1415077.5625,
            "unit": "ns",
            "range": "± 91247.32871681202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5400912.166666667,
            "unit": "ns",
            "range": "± 108444.11576312962"
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
          "id": "326d26e558508a7a232a335251bf15af1eaa7581",
          "message": "Release 3.7.1",
          "timestamp": "2023-11-21T12:04:29+09:00",
          "tree_id": "31ff2a4e877d3793bb1a40b66faf88c0752310fb",
          "url": "https://github.com/greymistcube/libplanet/commit/326d26e558508a7a232a335251bf15af1eaa7581"
        },
        "date": 1700536519501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198820.53174603175,
            "unit": "ns",
            "range": "± 9135.19184954581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192049.32098765433,
            "unit": "ns",
            "range": "± 10028.542072289421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164081.38888888888,
            "unit": "ns",
            "range": "± 3497.9563132322055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3131173.714285714,
            "unit": "ns",
            "range": "± 41681.79056056931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2854401.2,
            "unit": "ns",
            "range": "± 49837.435933815286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14832.077319587628,
            "unit": "ns",
            "range": "± 2698.9580390520287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64100.96842105263,
            "unit": "ns",
            "range": "± 6729.9531224895645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61231.41052631579,
            "unit": "ns",
            "range": "± 9807.623360898895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70249.98969072165,
            "unit": "ns",
            "range": "± 11746.188114390243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3128.5222222222224,
            "unit": "ns",
            "range": "± 565.0140940427206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11766.173913043478,
            "unit": "ns",
            "range": "± 1653.8000371352266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722675.3671875,
            "unit": "ns",
            "range": "± 50145.41814055514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205497.0492788462,
            "unit": "ns",
            "range": "± 4404.833086484026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750779.7931941106,
            "unit": "ns",
            "range": "± 1906.9145498346452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956901.13203125,
            "unit": "ns",
            "range": "± 3958.6387424019094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631642.811711238,
            "unit": "ns",
            "range": "± 2962.7704057851915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570604.1744140625,
            "unit": "ns",
            "range": "± 10306.096378476599"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41121.78125,
            "unit": "ns",
            "range": "± 5441.500160226957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411077.5714285714,
            "unit": "ns",
            "range": "± 20633.580577690434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2512775.7954545454,
            "unit": "ns",
            "range": "± 93257.96546079816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3170886.6153846155,
            "unit": "ns",
            "range": "± 42158.501868026695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3085731.388888889,
            "unit": "ns",
            "range": "± 65780.70167108183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6582360.22,
            "unit": "ns",
            "range": "± 117201.43242850462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5542586.933333334,
            "unit": "ns",
            "range": "± 44145.887927685966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14919497.083333334,
            "unit": "ns",
            "range": "± 109839.04030523138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35689004.6,
            "unit": "ns",
            "range": "± 221717.5207780644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74354922.53333333,
            "unit": "ns",
            "range": "± 985060.8956850526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150059137,
            "unit": "ns",
            "range": "± 1688053.4512162225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968199.9893617021,
            "unit": "ns",
            "range": "± 92593.08758234678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1865181.223880597,
            "unit": "ns",
            "range": "± 87772.9876715066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1372520.694736842,
            "unit": "ns",
            "range": "± 91991.26235589637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5707109.461538462,
            "unit": "ns",
            "range": "± 319147.8942291073"
          }
        ]
      }
    ]
  }
}