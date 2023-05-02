window.BENCHMARK_DATA = {
  "lastUpdate": 1682993882418,
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
          "id": "4d084d486b5cf5677929370e2331902224b7fa40",
          "message": "Changelog",
          "timestamp": "2023-05-02T10:52:10+09:00",
          "tree_id": "704625ba1eeca124c7cafb0b315bbcec741389b2",
          "url": "https://github.com/greymistcube/libplanet/commit/4d084d486b5cf5677929370e2331902224b7fa40"
        },
        "date": 1682993852516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438064,
            "unit": "ns",
            "range": "± 129068.0562159109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2620060.975609756,
            "unit": "ns",
            "range": "± 138769.35990491253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2301739.5833333335,
            "unit": "ns",
            "range": "± 179636.72785823626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5457866,
            "unit": "ns",
            "range": "± 273730.2938927195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56673.958333333336,
            "unit": "ns",
            "range": "± 5711.691514441264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7259620,
            "unit": "ns",
            "range": "± 166618.3350623435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20253813.333333332,
            "unit": "ns",
            "range": "± 244333.67952941105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50822100,
            "unit": "ns",
            "range": "± 248428.94046696424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102645730,
            "unit": "ns",
            "range": "± 1908582.9991308812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207044278.57142857,
            "unit": "ns",
            "range": "± 2376620.746800145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4970983.323317308,
            "unit": "ns",
            "range": "± 33048.245240145116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542057.16796875,
            "unit": "ns",
            "range": "± 6154.775274715639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1195802.4338942308,
            "unit": "ns",
            "range": "± 5029.14336437402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2686720.6119791665,
            "unit": "ns",
            "range": "± 40420.24285076309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841633.5239955357,
            "unit": "ns",
            "range": "± 3355.8418381860693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768804.8060825893,
            "unit": "ns",
            "range": "± 3337.2274524750833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3352268.75,
            "unit": "ns",
            "range": "± 61224.71961280563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3568720.6896551726,
            "unit": "ns",
            "range": "± 89311.3669749599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4060833.3333333335,
            "unit": "ns",
            "range": "± 157337.49648897568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4256865.7534246575,
            "unit": "ns",
            "range": "± 209671.03017397545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6733797.5,
            "unit": "ns",
            "range": "± 233707.86441843509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282808.5714285714,
            "unit": "ns",
            "range": "± 13196.483313468409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271260.71428571426,
            "unit": "ns",
            "range": "± 11572.784352191899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226098.9010989011,
            "unit": "ns",
            "range": "± 12611.48942217633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3994105.263157895,
            "unit": "ns",
            "range": "± 74950.57240671059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3662747.3684210526,
            "unit": "ns",
            "range": "± 77495.04190893658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26783.838383838385,
            "unit": "ns",
            "range": "± 3268.2363424238793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104603.0612244898,
            "unit": "ns",
            "range": "± 10641.04535289642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108853,
            "unit": "ns",
            "range": "± 13391.12064471126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121105.26315789473,
            "unit": "ns",
            "range": "± 19060.465759870684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8582.291666666666,
            "unit": "ns",
            "range": "± 1774.91258742014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23816.494845360823,
            "unit": "ns",
            "range": "± 3048.6226539062936"
          }
        ]
      }
    ]
  }
}