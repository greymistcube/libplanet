window.BENCHMARK_DATA = {
  "lastUpdate": 1690509197791,
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
          "id": "a677c8c39ee17b94ce8e041afcbff558ff97f7c1",
          "message": "Prepare 3.1.1",
          "timestamp": "2023-07-28T10:36:34+09:00",
          "tree_id": "6ee5a724e33759b64b7913963c94e04ac6daa09c",
          "url": "https://github.com/greymistcube/libplanet/commit/a677c8c39ee17b94ce8e041afcbff558ff97f7c1"
        },
        "date": 1690509181672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8275443.136363637,
            "unit": "ns",
            "range": "± 296657.97039289563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20378393.529411763,
            "unit": "ns",
            "range": "± 413940.92799141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49233274.538461536,
            "unit": "ns",
            "range": "± 506493.06853822706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101412884.93333334,
            "unit": "ns",
            "range": "± 1578793.236907565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207889927,
            "unit": "ns",
            "range": "± 1361886.243924702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66003.22105263158,
            "unit": "ns",
            "range": "± 10620.870032057164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328247.72631578945,
            "unit": "ns",
            "range": "± 37176.78879310117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300952.8214285714,
            "unit": "ns",
            "range": "± 16188.346714636124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296827.95588235295,
            "unit": "ns",
            "range": "± 13537.929888086324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4209867.014285714,
            "unit": "ns",
            "range": "± 137477.62894833888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3839312.6071428573,
            "unit": "ns",
            "range": "± 107978.37393263636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18009.521276595744,
            "unit": "ns",
            "range": "± 2466.286236554409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83932.0625,
            "unit": "ns",
            "range": "± 8483.967330159312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93897.62626262626,
            "unit": "ns",
            "range": "± 11902.527500052554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93477.35416666667,
            "unit": "ns",
            "range": "± 13563.028916471241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4604.815217391304,
            "unit": "ns",
            "range": "± 501.28862361068065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16847.09677419355,
            "unit": "ns",
            "range": "± 1807.776324807071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1692025.25,
            "unit": "ns",
            "range": "± 247042.87315316746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3215709.215909091,
            "unit": "ns",
            "range": "± 372748.1597581392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2341190.895604396,
            "unit": "ns",
            "range": "± 286706.35952295933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7004028.777777778,
            "unit": "ns",
            "range": "± 1725292.2383148405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3303101.882352941,
            "unit": "ns",
            "range": "± 156828.24700674886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3546890.9891304346,
            "unit": "ns",
            "range": "± 219176.83123373057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4480503.982758621,
            "unit": "ns",
            "range": "± 191874.51342554376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3932394.3,
            "unit": "ns",
            "range": "± 205374.58379334238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7489767.545977011,
            "unit": "ns",
            "range": "± 396455.5628454646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6377941.204799107,
            "unit": "ns",
            "range": "± 60521.822216088716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2025664.4315104166,
            "unit": "ns",
            "range": "± 23019.758880034795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290173.62109375,
            "unit": "ns",
            "range": "± 20847.318601401494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2735262.570870536,
            "unit": "ns",
            "range": "± 16379.537635630215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824166.6650965074,
            "unit": "ns",
            "range": "± 16202.932212939788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727354.4468149039,
            "unit": "ns",
            "range": "± 4063.704857552786"
          }
        ]
      }
    ]
  }
}