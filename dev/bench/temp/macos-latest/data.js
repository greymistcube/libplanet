window.BENCHMARK_DATA = {
  "lastUpdate": 1680590421151,
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
          "id": "cff89a486b9058e1f22408e4adbb59472fb6452c",
          "message": "Suggestions",
          "timestamp": "2023-04-04T14:17:24+09:00",
          "tree_id": "608dac6096fb5ee067136aa0e8af45f75aecbe5e",
          "url": "https://github.com/greymistcube/libplanet/commit/cff89a486b9058e1f22408e4adbb59472fb6452c"
        },
        "date": 1680590404655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7616480.346153846,
            "unit": "ns",
            "range": "± 193362.89260495506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21089356.610526316,
            "unit": "ns",
            "range": "± 1206156.6176467503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50043359,
            "unit": "ns",
            "range": "± 2041923.2987734345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93554360.96153846,
            "unit": "ns",
            "range": "± 1449888.3202642202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194261211.83333334,
            "unit": "ns",
            "range": "± 4096739.3183758636"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59647.97252747253,
            "unit": "ns",
            "range": "± 8040.070320782386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369518.5432098765,
            "unit": "ns",
            "range": "± 19117.089181573498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296683.753164557,
            "unit": "ns",
            "range": "± 15375.50515198365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272637.31176470587,
            "unit": "ns",
            "range": "± 14709.41473010537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5296266.636363637,
            "unit": "ns",
            "range": "± 127347.58295780413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4124987.8924731184,
            "unit": "ns",
            "range": "± 347101.87993899424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18227.397849462366,
            "unit": "ns",
            "range": "± 1980.7381536875553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95349.52061855671,
            "unit": "ns",
            "range": "± 11963.751767473994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93139.68478260869,
            "unit": "ns",
            "range": "± 7798.278713892323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 235745.59574468085,
            "unit": "ns",
            "range": "± 22037.920054032747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6665.675824175824,
            "unit": "ns",
            "range": "± 1219.8698527430117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17045.813186813186,
            "unit": "ns",
            "range": "± 1458.7243583357183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1658365.84375,
            "unit": "ns",
            "range": "± 228711.12332348665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2933950.9682539683,
            "unit": "ns",
            "range": "± 133935.9786654187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2722006.2525252528,
            "unit": "ns",
            "range": "± 397992.84339223435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7091524.511363637,
            "unit": "ns",
            "range": "± 520423.24411572056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325789.1413043477,
            "unit": "ns",
            "range": "± 330875.002274757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3324363.945054945,
            "unit": "ns",
            "range": "± 243850.0068776051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4264608.763157895,
            "unit": "ns",
            "range": "± 144593.64685726317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4394584.994736842,
            "unit": "ns",
            "range": "± 344267.1594155019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8844464.207317073,
            "unit": "ns",
            "range": "± 466358.5151918734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6346822.211458334,
            "unit": "ns",
            "range": "± 87611.82028660025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938552.2626302084,
            "unit": "ns",
            "range": "± 28402.25673585712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1260610.5204427084,
            "unit": "ns",
            "range": "± 14840.038039158208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642878.0794270835,
            "unit": "ns",
            "range": "± 37472.85792526227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 774251.5852399553,
            "unit": "ns",
            "range": "± 9819.074311267554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722939.5245535715,
            "unit": "ns",
            "range": "± 10536.702187823024"
          }
        ]
      }
    ]
  }
}