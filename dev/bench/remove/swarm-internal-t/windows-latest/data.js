window.BENCHMARK_DATA = {
  "lastUpdate": 1684467411534,
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
          "id": "8aba8aef32232d502aaa8404b23532abd679bd9e",
          "message": "Removed t from BlockCompletion",
          "timestamp": "2023-05-19T12:13:30+09:00",
          "tree_id": "758f003cc68e38226c3434603c44a525979ac94b",
          "url": "https://github.com/greymistcube/libplanet/commit/8aba8aef32232d502aaa8404b23532abd679bd9e"
        },
        "date": 1684467389301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466015.3846153845,
            "unit": "ns",
            "range": "± 51275.820394070935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2656782.5581395347,
            "unit": "ns",
            "range": "± 144546.43722946572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2076412.5,
            "unit": "ns",
            "range": "± 115403.53661460248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5391909.375,
            "unit": "ns",
            "range": "± 310880.37945846125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48821.59090909091,
            "unit": "ns",
            "range": "± 2697.7405984393918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6848017.647058823,
            "unit": "ns",
            "range": "± 138440.58398503542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18992820,
            "unit": "ns",
            "range": "± 298472.55245906377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49262440,
            "unit": "ns",
            "range": "± 813790.8644995084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96479047.61904761,
            "unit": "ns",
            "range": "± 2289533.136388082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190449473.91304347,
            "unit": "ns",
            "range": "± 4808611.363454431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4724513.645833333,
            "unit": "ns",
            "range": "± 39441.47780459006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507122.1028645833,
            "unit": "ns",
            "range": "± 7587.463250134438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161448.4700520833,
            "unit": "ns",
            "range": "± 6751.867399171862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622585.8984375,
            "unit": "ns",
            "range": "± 9437.07543036491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824121.3932291666,
            "unit": "ns",
            "range": "± 3135.5202651854374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759261.6666666666,
            "unit": "ns",
            "range": "± 2311.321507000851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3000840,
            "unit": "ns",
            "range": "± 120554.48933141885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3151276.595744681,
            "unit": "ns",
            "range": "± 186621.5729473999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3911156,
            "unit": "ns",
            "range": "± 103050.55830351754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3935537.9310344825,
            "unit": "ns",
            "range": "± 160741.73229409792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6394120,
            "unit": "ns",
            "range": "± 224448.5552386514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260530,
            "unit": "ns",
            "range": "± 13480.29410339122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248498.38709677418,
            "unit": "ns",
            "range": "± 11331.24928993491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224006,
            "unit": "ns",
            "range": "± 15705.965025229661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3985205.882352941,
            "unit": "ns",
            "range": "± 78567.75317033888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3441882.6086956523,
            "unit": "ns",
            "range": "± 67057.2391331324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18463.440860215054,
            "unit": "ns",
            "range": "± 1678.1709081639895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84934.06593406593,
            "unit": "ns",
            "range": "± 6826.015915927334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69156.94444444444,
            "unit": "ns",
            "range": "± 3151.9645735519375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98261.61616161616,
            "unit": "ns",
            "range": "± 19320.464497050198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5108.333333333333,
            "unit": "ns",
            "range": "± 892.8566416038693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18145.918367346938,
            "unit": "ns",
            "range": "± 2444.314605400587"
          }
        ]
      }
    ]
  }
}