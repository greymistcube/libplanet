window.BENCHMARK_DATA = {
  "lastUpdate": 1691652026741,
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
          "id": "04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9",
          "message": "Merge tag '3.1.2' into port/3.1.2-to-main\n\nLibplanet 3.1.2",
          "timestamp": "2023-08-10T16:03:27+09:00",
          "tree_id": "4b1c486d0920781a82c56ed2b2866158aa607126",
          "url": "https://github.com/greymistcube/libplanet/commit/04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9"
        },
        "date": 1691651998853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8356780.423076923,
            "unit": "ns",
            "range": "± 224093.84722743696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20943110.346153848,
            "unit": "ns",
            "range": "± 334705.74450598797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52517919.93333333,
            "unit": "ns",
            "range": "± 583533.5843785156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106433113.93333334,
            "unit": "ns",
            "range": "± 622445.5155292673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212463484.7142857,
            "unit": "ns",
            "range": "± 871166.1800296488"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73706.98958333333,
            "unit": "ns",
            "range": "± 7027.921807812923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320480.1038961039,
            "unit": "ns",
            "range": "± 16395.82701529201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309183.5677966102,
            "unit": "ns",
            "range": "± 13650.991143584444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321297.03225806454,
            "unit": "ns",
            "range": "± 9767.814151534863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4180410.433333333,
            "unit": "ns",
            "range": "± 66440.18906662987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3762760.5,
            "unit": "ns",
            "range": "± 35316.57332177497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26007.711340206184,
            "unit": "ns",
            "range": "± 2847.9143902408464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114952.8469387755,
            "unit": "ns",
            "range": "± 11937.79300118817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115689.20707070707,
            "unit": "ns",
            "range": "± 7942.726668060592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110688.94444444444,
            "unit": "ns",
            "range": "± 11381.30327775557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7907.652631578947,
            "unit": "ns",
            "range": "± 879.2157623558146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24780.122448979593,
            "unit": "ns",
            "range": "± 2905.23761476643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1527492.9473684211,
            "unit": "ns",
            "range": "± 113382.161047942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2970740.7454545456,
            "unit": "ns",
            "range": "± 125570.40967878129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1993546.2424242424,
            "unit": "ns",
            "range": "± 163837.12883083755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5733787.295454546,
            "unit": "ns",
            "range": "± 208554.194653369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3374721.84375,
            "unit": "ns",
            "range": "± 86163.8405236283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3510940.590909091,
            "unit": "ns",
            "range": "± 124127.94137414121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4466891.075757576,
            "unit": "ns",
            "range": "± 127862.20099388988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4090281.1923076925,
            "unit": "ns",
            "range": "± 108324.16391295867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6726040.555555556,
            "unit": "ns",
            "range": "± 202820.81252988445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5761056.068229167,
            "unit": "ns",
            "range": "± 26467.218808746617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1692857.1873697916,
            "unit": "ns",
            "range": "± 5905.530046844233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1002129.4680989584,
            "unit": "ns",
            "range": "± 2829.052352916564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655066.732682292,
            "unit": "ns",
            "range": "± 32135.779666194052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 778598.4702524039,
            "unit": "ns",
            "range": "± 1738.9047460083582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778083.344921875,
            "unit": "ns",
            "range": "± 2637.50429692365"
          }
        ]
      }
    ]
  }
}