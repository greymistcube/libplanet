window.BENCHMARK_DATA = {
  "lastUpdate": 1700794550025,
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
          "id": "933ada7290d7910ff4d3fa82887d22c52ab51254",
          "message": "Prepare 3.8.1",
          "timestamp": "2023-11-24T11:32:48+09:00",
          "tree_id": "45fc17974df334c07b6218760a11d9124b75b336",
          "url": "https://github.com/greymistcube/libplanet/commit/933ada7290d7910ff4d3fa82887d22c52ab51254"
        },
        "date": 1700794528873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11478862.354166666,
            "unit": "ns",
            "range": "± 2078794.4607163721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24082068.815789472,
            "unit": "ns",
            "range": "± 487965.5497084073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 84153274.9021739,
            "unit": "ns",
            "range": "± 15432087.12586082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139211563.21276596,
            "unit": "ns",
            "range": "± 26511535.364490297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290277737.4468085,
            "unit": "ns",
            "range": "± 61245934.316407494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79115.1836734694,
            "unit": "ns",
            "range": "± 21753.942758927624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352472.8125,
            "unit": "ns",
            "range": "± 93145.21536569856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341700.81,
            "unit": "ns",
            "range": "± 79082.24788790425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326760.4684210526,
            "unit": "ns",
            "range": "± 76062.77800431059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5291021.5,
            "unit": "ns",
            "range": "± 1009392.4279888686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5134454.469387755,
            "unit": "ns",
            "range": "± 1183893.0269884176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16050.385416666666,
            "unit": "ns",
            "range": "± 3107.4193129882638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117737.97938144329,
            "unit": "ns",
            "range": "± 24154.032654153296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119758.5625,
            "unit": "ns",
            "range": "± 30135.864361190183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88151.03333333334,
            "unit": "ns",
            "range": "± 15868.955079269248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7367.836734693878,
            "unit": "ns",
            "range": "± 1408.3725633486872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19945.36842105263,
            "unit": "ns",
            "range": "± 4375.332943082383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484460.317204301,
            "unit": "ns",
            "range": "± 374602.41957460844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2882962.3095238097,
            "unit": "ns",
            "range": "± 282316.71255240456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2275332.170212766,
            "unit": "ns",
            "range": "± 570222.7734868404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10174658.91935484,
            "unit": "ns",
            "range": "± 2485462.95332367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4384980.180851064,
            "unit": "ns",
            "range": "± 1014572.4438236561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4244949.373684211,
            "unit": "ns",
            "range": "± 892622.9006417613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4384621.055555556,
            "unit": "ns",
            "range": "± 143135.27345196312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4621907.074468086,
            "unit": "ns",
            "range": "± 798564.3507075276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18813772.376344085,
            "unit": "ns",
            "range": "± 3714310.767877414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5207953.8534050705,
            "unit": "ns",
            "range": "± 214599.95309669012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586820.8216507523,
            "unit": "ns",
            "range": "± 66005.90933840397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 964599.9165039062,
            "unit": "ns",
            "range": "± 61614.76182430424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2317468.9735991377,
            "unit": "ns",
            "range": "± 67730.73067967045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 756510.8992385007,
            "unit": "ns",
            "range": "± 62765.887162771454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 657077.1249894993,
            "unit": "ns",
            "range": "± 62142.14110443403"
          }
        ]
      }
    ]
  }
}